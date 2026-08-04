import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import { v4 as uuidv4 } from 'uuid';
import { createHash } from 'crypto';

import { AuthRepository } from './auth.repository';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtPayload, JwtRefreshPayload } from '../common/interfaces/jwt-payload.interface';
import { Role } from '../common/enums/role.enum';

// ─── Argon2 Configuration ──────────────────────────────────────────
const ARGON2_OPTIONS: argon2.Options = {
  type: argon2.argon2id,
  memoryCost: 65536, // 64MB
  timeCost: 3,
  parallelism: 4,
};

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // ─── LOGIN ─────────────────────────────────────────────────────────

  async login(
    dto: LoginDto,
    ipAddress?: string,
    userAgent?: string,
  ): Promise<AuthTokens & { admin: object }> {
    // 1. Find admin by email
    const admin = await this.authRepository.findAdminByEmail(dto.email);
    if (!admin) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    // 2. Check account is active
    if (!admin.isActive) {
      throw new ForbiddenException(
        'Your account has been deactivated. Please contact the Super Admin.',
      );
    }

    // 3. Verify password — constant-time comparison
    const isPasswordValid = await argon2.verify(admin.password, dto.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    // 4. Generate & store tokens
    const tokens = await this.generateTokens(
      admin.id,
      admin.email,
      admin.role as Role,
      ipAddress,
      userAgent,
    );

    // 5. Housekeeping (non-blocking)
    void this.authRepository.cleanupExpiredTokens(admin.id);

    // 6. Log activity
    await this.authRepository.createActivityLog({
      adminId: admin.id,
      action: 'LOGIN',
      entity: 'Admin',
      entityId: admin.id,
      description: `Admin ${admin.email} logged in`,
      ipAddress,
      userAgent,
    });

    this.logger.log(`✅ Login: ${admin.email} from ${ipAddress}`);

    return {
      ...tokens,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        avatar: admin.avatar,
      },
    };
  }

  // ─── LOGOUT ────────────────────────────────────────────────────────

  async logout(adminId: string, ipAddress?: string): Promise<void> {
    await this.authRepository.revokeAllAdminTokens(adminId);

    await this.authRepository.createActivityLog({
      adminId,
      action: 'LOGOUT',
      entity: 'Admin',
      entityId: adminId,
      description: 'Admin logged out — all sessions revoked',
      ipAddress,
    });

    this.logger.log(`Admin ${adminId} logged out`);
  }

  // ─── REFRESH TOKEN (Token Rotation) ────────────────────────────────

  async refreshTokens(
    adminId: string,
    oldTokenId: string,
    ipAddress?: string,
    userAgent?: string,
  ): Promise<AuthTokens> {
    const admin = await this.authRepository.findAdminById(adminId);

    if (!admin || !admin.isActive) {
      throw new UnauthorizedException('Admin account not found or deactivated.');
    }

    // Revoke old token
    await this.authRepository.revokeRefreshToken(oldTokenId);

    // Issue new token pair
    return this.generateTokens(admin.id, admin.email, admin.role as Role, ipAddress, userAgent);
  }

  // ─── FORGOT PASSWORD ───────────────────────────────────────────────

  async forgotPassword(
    dto: ForgotPasswordDto,
    ipAddress?: string,
  ): Promise<{ message: string; resetToken?: string }> {
    const admin = await this.authRepository.findAdminByEmail(dto.email);

    // Always return success to prevent email enumeration
    if (!admin) {
      return {
        message: 'If this email is registered, you will receive a password reset link.',
      };
    }

    // Generate a cryptographically secure reset token
    const resetToken = uuidv4();
    const tokenHash = createHash('sha256').update(resetToken).digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await this.authRepository.upsertPasswordResetToken(admin.id, tokenHash, expiresAt);

    const isDevMode = this.configService.get<string>('MAIL_DEV_MODE') === 'true';

    await this.authRepository.createActivityLog({
      adminId: admin.id,
      action: 'PASSWORD_RESET_REQUEST',
      entity: 'Admin',
      entityId: admin.id,
      description: 'Password reset token generated',
      ipAddress,
    });

    this.logger.log(`Password reset requested: ${admin.email}`);

    if (isDevMode) {
      return {
        message: '[DEV MODE] Use this token to reset your password.',
        resetToken,
      };
    }

    // TODO: Send email via MailService
    // await this.mailService.sendPasswordReset(admin.email, admin.name, resetToken);

    return {
      message: 'If this email is registered, you will receive a password reset link.',
    };
  }

  // ─── RESET PASSWORD ────────────────────────────────────────────────

  async resetPassword(dto: ResetPasswordDto): Promise<void> {
    const tokenHash = createHash('sha256').update(dto.token).digest('hex');

    const record = await this.authRepository.findValidResetToken(tokenHash);
    if (!record) {
      throw new BadRequestException('Invalid or expired password reset token.');
    }

    const admin = await this.authRepository.findAdminById(record.adminId);
    if (!admin) {
      throw new NotFoundException('Admin account not found.');
    }

    // Hash new password and update
    const hashedPassword = await argon2.hash(dto.newPassword, ARGON2_OPTIONS);
    await this.authRepository.updateAdminPassword(admin.id, hashedPassword);

    // Invalidate all existing sessions
    await this.authRepository.revokeAllAdminTokens(admin.id);

    // Mark token as used
    await this.authRepository.markResetTokenUsed(record.logId);

    await this.authRepository.createActivityLog({
      adminId: admin.id,
      action: 'PASSWORD_RESET',
      entity: 'Admin',
      entityId: admin.id,
      description: 'Password successfully reset via reset token',
    });

    this.logger.log(`Password reset completed: ${admin.email}`);
  }

  // ─── CHANGE PASSWORD ───────────────────────────────────────────────

  async changePassword(adminId: string, dto: ChangePasswordDto): Promise<void> {
    const admin = await this.authRepository.findAdminById(adminId);
    if (!admin) {
      throw new NotFoundException('Admin account not found.');
    }

    // Verify current password
    const isCurrentValid = await argon2.verify(admin.password, dto.currentPassword);
    if (!isCurrentValid) {
      throw new BadRequestException('Current password is incorrect.');
    }

    // Prevent same password reuse
    const isSamePassword = await argon2.verify(admin.password, dto.newPassword);
    if (isSamePassword) {
      throw new BadRequestException(
        'New password cannot be the same as the current password.',
      );
    }

    const hashedPassword = await argon2.hash(dto.newPassword, ARGON2_OPTIONS);
    await this.authRepository.updateAdminPassword(adminId, hashedPassword);

    // Force re-login on all devices
    await this.authRepository.revokeAllAdminTokens(adminId);

    await this.authRepository.createActivityLog({
      adminId,
      action: 'PASSWORD_CHANGED',
      entity: 'Admin',
      entityId: adminId,
      description: 'Admin changed their own password',
    });
  }

  // ─── GET ME ────────────────────────────────────────────────────────

  async getMe(adminId: string): Promise<object> {
    const admin = await this.authRepository.findAdminById(adminId);
    if (!admin) {
      throw new NotFoundException('Admin account not found.');
    }

    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      avatar: admin.avatar,
      isActive: admin.isActive,
      createdAt: admin.createdAt,
      updatedAt: admin.updatedAt,
    };
  }

  // ─── PRIVATE: Generate & Store Token Pair ─────────────────────────

  /**
   * Generates a signed access token + refresh token pair and persists
   * the refresh token hash in the DB.
   *
   * Flow:
   * 1. Sign access token (short-lived, 15m)
   * 2. Generate a UUID tokenId (used as the DB record ID reference)
   * 3. Sign refresh token with the tokenId embedded in the payload
   * 4. Hash the signed refresh token string with argon2
   * 5. Persist the hash with calculated expiry
   */
  private async generateTokens(
    adminId: string,
    email: string,
    role: Role,
    ipAddress?: string,
    userAgent?: string,
  ): Promise<AuthTokens> {
    const accessPayload: JwtPayload = { sub: adminId, email, role };

    // Sign access token first
    const accessToken = await this.jwtService.signAsync(
      { ...accessPayload } as object,
      {
        secret: this.configService.get<string>('jwt.accessSecret'),
        expiresIn: (this.configService.get<string>('jwt.accessExpiresIn') || '15m') as unknown as number,
      },
    );

    // Pre-generate a UUID that will be used as the token record ID
    // We set a placeholder first, then use the real DB-generated ID
    const refreshExpiresInStr = this.configService.get<string>('jwt.refreshExpiresIn') || '7d';
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // Create a placeholder record to get the DB-generated ID
    const placeholderRecord = await this.authRepository.createRefreshToken({
      adminId,
      tokenHash: 'placeholder',
      expiresAt,
      ipAddress,
      userAgent,
    });

    // Now sign the refresh token WITH the real DB record ID
    const refreshPayload: JwtRefreshPayload = {
      sub: adminId,
      tokenId: placeholderRecord.id,
    };

    const refreshToken = await this.jwtService.signAsync(
      { ...refreshPayload } as object,
      {
        secret: this.configService.get<string>('jwt.refreshSecret'),
        expiresIn: (refreshExpiresInStr) as unknown as number,
      },
    );

    // Hash the final refresh token string and update the DB record
    const tokenHash = await argon2.hash(refreshToken, ARGON2_OPTIONS);

    await this.authRepository.updateRefreshTokenHash(placeholderRecord.id, tokenHash);

    return { accessToken, refreshToken };
  }
}
