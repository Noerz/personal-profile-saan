import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import * as argon2 from 'argon2';

import { UsersRepository, AdminSafe } from './users.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { QueryAdminDto } from './dto/query-admin.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ResetAdminPasswordDto } from './dto/reset-admin-password.dto';
import { UpdateSelfDto } from './dto/update-self.dto';
import { PaginatedResult } from '../../common/interfaces/paginated-result.interface';
import { Role } from '../../common/enums/role.enum';

const ARGON2_OPTIONS: argon2.Options = {
  type: argon2.argon2id,
  memoryCost: 65536,
  timeCost: 3,
  parallelism: 4,
};

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly usersRepository: UsersRepository) {}

  // ─── LIST ADMINS ───────────────────────────────────────────────────

  async findAll(query: QueryAdminDto): Promise<PaginatedResult<AdminSafe>> {
    return this.usersRepository.findAll(query);
  }

  // ─── GET ADMIN DETAIL ──────────────────────────────────────────────

  async findOne(id: string): Promise<AdminSafe & { _count: { articles: number; activityLogs: number } }> {
    const admin = await this.usersRepository.findByIdWithStats(id);
    if (!admin) {
      throw new NotFoundException(`Admin with ID "${id}" not found.`);
    }
    return admin;
  }

  // ─── CREATE ADMIN ─────────────────────────────────────────────────

  async create(
    dto: CreateAdminDto,
    createdById: string,
  ): Promise<AdminSafe> {
    // Prevent creating another SUPER_ADMIN
    if (dto.role === Role.SUPER_ADMIN) {
      throw new ForbiddenException('Cannot create a SUPER_ADMIN account via this endpoint.');
    }

    // Check email uniqueness
    const emailExists = await this.usersRepository.existsByEmail(dto.email);
    if (emailExists) {
      throw new ConflictException(`Email "${dto.email}" is already registered.`);
    }

    // Hash password
    const hashedPassword = await argon2.hash(dto.password, ARGON2_OPTIONS);

    const admin = await this.usersRepository.create({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: dto.role || Role.EDITOR,
    });

    await this.usersRepository.createActivityLog({
      adminId: createdById,
      action: 'CREATE',
      entity: 'Admin',
      entityId: admin.id,
      description: `Created admin account: ${admin.email} with role ${admin.role}`,
    });

    this.logger.log(`Admin created: ${admin.email} (by admin ${createdById})`);
    return admin;
  }

  // ─── UPDATE ADMIN ──────────────────────────────────────────────────

  async update(
    id: string,
    dto: UpdateAdminDto,
    updatedById: string,
  ): Promise<AdminSafe> {
    await this.assertAdminExists(id);

    // Check email uniqueness if email is being changed
    if (dto.email) {
      const emailExists = await this.usersRepository.existsByEmail(dto.email, id);
      if (emailExists) {
        throw new ConflictException(`Email "${dto.email}" is already taken by another admin.`);
      }
    }

    const updated = await this.usersRepository.update(id, dto);

    await this.usersRepository.createActivityLog({
      adminId: updatedById,
      action: 'UPDATE',
      entity: 'Admin',
      entityId: id,
      description: `Updated admin account: ${updated.email}`,
      metadata: { fields: Object.keys(dto) },
    });

    return updated;
  }

  // ─── UPDATE ROLE ───────────────────────────────────────────────────

  async updateRole(
    id: string,
    dto: UpdateRoleDto,
    updatedById: string,
  ): Promise<AdminSafe> {
    const admin = await this.assertAdminExists(id);

    // Prevent modifying a SUPER_ADMIN's role
    if (admin.role === Role.SUPER_ADMIN) {
      throw new ForbiddenException('Cannot change the role of a SUPER_ADMIN.');
    }

    // Prevent self-demotion
    if (id === updatedById) {
      throw new ForbiddenException('You cannot change your own role.');
    }

    const updated = await this.usersRepository.updateRole(id, dto.role);

    await this.usersRepository.createActivityLog({
      adminId: updatedById,
      action: 'UPDATE_ROLE',
      entity: 'Admin',
      entityId: id,
      description: `Changed admin ${admin.email} role from ${admin.role} to ${dto.role}`,
    });

    return updated;
  }

  // ─── RESET ADMIN PASSWORD (by Super Admin) ─────────────────────────

  async resetPassword(
    id: string,
    dto: ResetAdminPasswordDto,
    resetById: string,
  ): Promise<void> {
    await this.assertAdminExists(id);

    const hashedPassword = await argon2.hash(dto.newPassword, ARGON2_OPTIONS);
    await this.usersRepository.updatePassword(id, hashedPassword);

    // Revoke all sessions of the target admin (force re-login)
    await this.usersRepository.revokeAllSessions(id);

    await this.usersRepository.createActivityLog({
      adminId: resetById,
      action: 'ADMIN_RESET_PASSWORD',
      entity: 'Admin',
      entityId: id,
      description: `Super Admin reset password for admin ID: ${id}`,
    });

    this.logger.log(`Password reset for admin ${id} by Super Admin ${resetById}`);
  }

  // ─── ACTIVATE / DEACTIVATE ─────────────────────────────────────────

  async activate(id: string, updatedById: string): Promise<AdminSafe> {
    await this.assertAdminExists(id);

    if (id === updatedById) {
      throw new ForbiddenException('You cannot change your own active status.');
    }

    const updated = await this.usersRepository.setActive(id, true);

    await this.usersRepository.createActivityLog({
      adminId: updatedById,
      action: 'ACTIVATE',
      entity: 'Admin',
      entityId: id,
      description: `Activated admin account: ${updated.email}`,
    });

    return updated;
  }

  async deactivate(id: string, updatedById: string): Promise<AdminSafe> {
    const admin = await this.assertAdminExists(id);

    if (id === updatedById) {
      throw new ForbiddenException('You cannot deactivate your own account.');
    }

    if (admin.role === Role.SUPER_ADMIN) {
      throw new ForbiddenException('Cannot deactivate a SUPER_ADMIN account.');
    }

    const updated = await this.usersRepository.setActive(id, false);

    // Revoke all active sessions — force logout
    await this.usersRepository.revokeAllSessions(id);

    await this.usersRepository.createActivityLog({
      adminId: updatedById,
      action: 'DEACTIVATE',
      entity: 'Admin',
      entityId: id,
      description: `Deactivated admin account: ${updated.email}`,
    });

    return updated;
  }

  // ─── SOFT DELETE ───────────────────────────────────────────────────

  async remove(id: string, deletedById: string): Promise<void> {
    const admin = await this.assertAdminExists(id);

    if (id === deletedById) {
      throw new ForbiddenException('You cannot delete your own account.');
    }

    if (admin.role === Role.SUPER_ADMIN) {
      throw new ForbiddenException('Cannot delete a SUPER_ADMIN account.');
    }

    await this.usersRepository.softDelete(id);
    await this.usersRepository.revokeAllSessions(id);

    await this.usersRepository.createActivityLog({
      adminId: deletedById,
      action: 'DELETE',
      entity: 'Admin',
      entityId: id,
      description: `Soft-deleted admin account: ${admin.email}`,
    });

    this.logger.log(`Admin soft-deleted: ${id} by ${deletedById}`);
  }

  // ─── SESSION MANAGEMENT (by Super Admin) ───────────────────────────

  async getAdminSessions(adminId: string): Promise<object[]> {
    await this.assertAdminExists(adminId);
    const sessions = await this.usersRepository.getActiveSessions(adminId);
    return this.sanitizeSessions(sessions);
  }

  async revokeAllAdminSessions(adminId: string, revokedById: string): Promise<{ revokedCount: number }> {
    await this.assertAdminExists(adminId);
    const revokedCount = await this.usersRepository.revokeAllSessions(adminId);

    await this.usersRepository.createActivityLog({
      adminId: revokedById,
      action: 'REVOKE_ALL_SESSIONS',
      entity: 'Admin',
      entityId: adminId,
      description: `Revoked all ${revokedCount} sessions for admin ${adminId}`,
    });

    return { revokedCount };
  }

  async revokeAdminSession(adminId: string, sessionId: string, revokedById: string): Promise<void> {
    await this.assertAdminExists(adminId);
    const revoked = await this.usersRepository.revokeSession(sessionId, adminId);

    if (!revoked) {
      throw new NotFoundException(`Session "${sessionId}" not found for this admin.`);
    }

    await this.usersRepository.createActivityLog({
      adminId: revokedById,
      action: 'REVOKE_SESSION',
      entity: 'Admin',
      entityId: adminId,
      description: `Revoked session ${sessionId} for admin ${adminId}`,
    });
  }

  // ─── SELF-MANAGEMENT (any logged-in admin) ─────────────────────────

  async getMe(adminId: string): Promise<AdminSafe & { _count: { articles: number; activityLogs: number } }> {
    return this.findOne(adminId);
  }

  async updateMe(adminId: string, dto: UpdateSelfDto): Promise<AdminSafe> {
    return this.usersRepository.update(adminId, dto);
  }

  async getMySessions(adminId: string): Promise<object[]> {
    const sessions = await this.usersRepository.getActiveSessions(adminId);
    return this.sanitizeSessions(sessions);
  }

  async revokeMySession(adminId: string, sessionId: string): Promise<void> {
    const revoked = await this.usersRepository.revokeSession(sessionId, adminId);
    if (!revoked) {
      throw new NotFoundException(`Session "${sessionId}" not found or does not belong to you.`);
    }
  }

  // ─── PRIVATE HELPERS ───────────────────────────────────────────────

  private async assertAdminExists(id: string): Promise<AdminSafe> {
    const admin = await this.usersRepository.findById(id);
    if (!admin) {
      throw new NotFoundException(`Admin with ID "${id}" not found.`);
    }
    return admin;
  }

  /**
   * Strip tokenHash from sessions before returning to client.
   * Never expose refresh token hashes.
   */
  private sanitizeSessions(sessions: {
    id: string;
    adminId: string;
    tokenHash: string;
    isRevoked: boolean;
    expiresAt: Date;
    ipAddress: string | null;
    userAgent: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[]): object[] {
    return sessions.map(({ tokenHash: _hash, ...safe }) => safe);
  }
}
