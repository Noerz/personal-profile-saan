import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Req,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { Throttle } from '@nestjs/throttler';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

import { Public } from '../common/decorators/public.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtRefreshGuard } from '../common/guards/jwt-refresh.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ─── POST /auth/login ──────────────────────────────────────────────
  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { ttl: 60000, limit: 5 } }) // 5 login attempts per minute
  @ApiOperation({ summary: 'Admin login', description: 'Authenticate with email and password' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @ApiResponse({ status: 403, description: 'Account deactivated' })
  @ApiResponse({ status: 429, description: 'Too many login attempts' })
  async login(@Body() dto: LoginDto, @Req() req: Request) {
    const ipAddress = this.getIpAddress(req);
    const userAgent = req.headers['user-agent'];
    return this.authService.login(dto, ipAddress, userAgent);
  }

  // ─── POST /auth/logout ─────────────────────────────────────────────
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Logout admin', description: 'Revoke all active sessions' })
  @ApiResponse({ status: 200, description: 'Logged out successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async logout(@CurrentUser('id') adminId: string, @Req() req: Request) {
    const ipAddress = this.getIpAddress(req);
    await this.authService.logout(adminId, ipAddress);
    return { success: true, message: 'Logged out successfully. All sessions have been revoked.' };
  }

  // ─── POST /auth/refresh ────────────────────────────────────────────
  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Refresh access token',
    description: 'Exchange a valid refresh token for a new token pair (Token Rotation)',
  })
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({ status: 200, description: 'Tokens refreshed successfully' })
  @ApiResponse({ status: 401, description: 'Invalid or expired refresh token' })
  async refresh(@Req() req: Request) {
    const { sub, tokenId } = req.user as { sub: string; tokenId: string };
    const ipAddress = this.getIpAddress(req);
    const userAgent = req.headers['user-agent'];
    return this.authService.refreshTokens(sub, tokenId, ipAddress, userAgent);
  }

  // ─── POST /auth/forgot-password ────────────────────────────────────
  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { ttl: 60000, limit: 3 } }) // 3 attempts per minute
  @ApiOperation({
    summary: 'Forgot password',
    description: 'Request a password reset token. Returns token directly in dev mode.',
  })
  @ApiResponse({ status: 200, description: 'Reset token sent (or returned in dev mode)' })
  async forgotPassword(@Body() dto: ForgotPasswordDto, @Req() req: Request) {
    const ipAddress = this.getIpAddress(req);
    return this.authService.forgotPassword(dto, ipAddress);
  }

  // ─── POST /auth/reset-password ─────────────────────────────────────
  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password', description: 'Reset password using the reset token' })
  @ApiResponse({ status: 200, description: 'Password reset successfully' })
  @ApiResponse({ status: 400, description: 'Invalid or expired reset token' })
  async resetPassword(@Body() dto: ResetPasswordDto) {
    await this.authService.resetPassword(dto);
    return { success: true, message: 'Password has been reset successfully. Please login with your new password.' };
  }

  // ─── PUT /auth/change-password ─────────────────────────────────────
  @Put('change-password')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({
    summary: 'Change password',
    description: 'Change password while logged in. All other sessions will be invalidated.',
  })
  @ApiResponse({ status: 200, description: 'Password changed successfully' })
  @ApiResponse({ status: 400, description: 'Current password incorrect or same as new password' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async changePassword(
    @CurrentUser('id') adminId: string,
    @Body() dto: ChangePasswordDto,
  ) {
    await this.authService.changePassword(adminId, dto);
    return {
      success: true,
      message: 'Password changed successfully. Please login again on all devices.',
    };
  }

  // ─── GET /auth/me ──────────────────────────────────────────────────
  @Get('me')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Get current admin', description: 'Get authenticated admin info' })
  @ApiResponse({ status: 200, description: 'Admin info retrieved' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getMe(@CurrentUser('id') adminId: string) {
    return this.authService.getMe(adminId);
  }

  // ─── PRIVATE ───────────────────────────────────────────────────────

  private getIpAddress(req: Request): string {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') {
      return forwarded.split(',')[0].trim();
    }
    return req.ip || req.socket?.remoteAddress || 'unknown';
  }
}
