import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { QueryAdminDto } from './dto/query-admin.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ResetAdminPasswordDto } from './dto/reset-admin-password.dto';
import { UpdateSelfDto } from './dto/update-self.dto';

import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Role } from '../../common/enums/role.enum';

@ApiTags('Admin - Users')
@ApiBearerAuth('JWT-Auth')
@Controller('admin/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ──────────────────────────────────────────────────────────────────
  // SELF-MANAGEMENT ROUTES (must come BEFORE /:id routes)
  // ──────────────────────────────────────────────────────────────────

  /**
   * GET /admin/users/me
   * Any logged-in admin can view their own profile
   */
  @Get('me')
  @ApiOperation({ summary: 'Get own profile', description: 'Get the authenticated admin profile with activity stats' })
  @ApiResponse({ status: 200, description: 'Profile retrieved' })
  getMe(@CurrentUser('id') adminId: string) {
    return this.usersService.getMe(adminId);
  }

  /**
   * PATCH /admin/users/me
   * Any admin can update their own name and avatar
   */
  @Patch('me')
  @ApiOperation({ summary: 'Update own profile', description: 'Update your own name and avatar' })
  @ApiResponse({ status: 200, description: 'Profile updated' })
  updateMe(@CurrentUser('id') adminId: string, @Body() dto: UpdateSelfDto) {
    return this.usersService.updateMe(adminId, dto);
  }

  /**
   * GET /admin/users/me/sessions
   * View own active sessions
   */
  @Get('me/sessions')
  @ApiOperation({ summary: 'Get own sessions', description: 'View all your active login sessions' })
  @ApiResponse({ status: 200, description: 'Sessions retrieved' })
  getMySessions(@CurrentUser('id') adminId: string) {
    return this.usersService.getMySessions(adminId);
  }

  /**
   * DELETE /admin/users/me/sessions/:sessionId
   * Logout from a specific device
   */
  @Delete('me/sessions/:sessionId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Revoke own session', description: 'Logout from a specific device/session' })
  @ApiParam({ name: 'sessionId', description: 'Session ID to revoke' })
  @ApiResponse({ status: 200, description: 'Session revoked' })
  async revokeMySession(
    @CurrentUser('id') adminId: string,
    @Param('sessionId', ParseUUIDPipe) sessionId: string,
  ) {
    await this.usersService.revokeMySession(adminId, sessionId);
    return { success: true, message: 'Session revoked. You have been logged out from that device.' };
  }

  // ──────────────────────────────────────────────────────────────────
  // SUPER ADMIN ONLY — Admin CRUD
  // ──────────────────────────────────────────────────────────────────

  /**
   * GET /admin/users
   * List all admin accounts with search, filter, sort, pagination
   */
  @Get()
  @Roles(Role.SUPER_ADMIN)
  @ApiOperation({ summary: '[SA] List all admins', description: 'Get paginated list of admin accounts' })
  @ApiResponse({ status: 200, description: 'Admins retrieved' })
  @ApiResponse({ status: 403, description: 'Forbidden - Super Admin only' })
  findAll(@Query() query: QueryAdminDto) {
    return this.usersService.findAll(query);
  }

  /**
   * POST /admin/users
   * Create a new admin or editor account
   */
  @Post()
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '[SA] Create admin', description: 'Create a new admin or editor account' })
  @ApiResponse({ status: 201, description: 'Admin created' })
  @ApiResponse({ status: 409, description: 'Email already registered' })
  create(@Body() dto: CreateAdminDto, @CurrentUser('id') adminId: string) {
    return this.usersService.create(dto, adminId);
  }

  /**
   * GET /admin/users/:id
   * Get specific admin with activity stats
   */
  @Get(':id')
  @Roles(Role.SUPER_ADMIN)
  @ApiOperation({ summary: '[SA] Get admin detail', description: 'Get admin details including activity statistics' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Admin detail retrieved' })
  @ApiResponse({ status: 404, description: 'Admin not found' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  /**
   * PATCH /admin/users/:id
   * Update admin info (name, email, avatar)
   */
  @Patch(':id')
  @Roles(Role.SUPER_ADMIN)
  @ApiOperation({ summary: '[SA] Update admin', description: 'Update admin name, email, or avatar' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Admin updated' })
  @ApiResponse({ status: 409, description: 'Email already taken' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateAdminDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.usersService.update(id, dto, adminId);
  }

  /**
   * DELETE /admin/users/:id
   * Soft delete admin account
   */
  @Delete(':id')
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[SA] Delete admin', description: 'Soft delete an admin account and revoke all sessions' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Admin deleted' })
  @ApiResponse({ status: 403, description: 'Cannot delete SUPER_ADMIN or self' })
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser('id') adminId: string,
  ) {
    await this.usersService.remove(id, adminId);
    return { success: true, message: 'Admin account has been deleted.' };
  }

  /**
   * PATCH /admin/users/:id/activate
   * Reactivate a deactivated admin account
   */
  @Patch(':id/activate')
  @Roles(Role.SUPER_ADMIN)
  @ApiOperation({ summary: '[SA] Activate admin', description: 'Reactivate a deactivated admin account' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Admin activated' })
  activate(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser('id') adminId: string,
  ) {
    return this.usersService.activate(id, adminId);
  }

  /**
   * PATCH /admin/users/:id/deactivate
   * Deactivate admin (force logout on all devices)
   */
  @Patch(':id/deactivate')
  @Roles(Role.SUPER_ADMIN)
  @ApiOperation({ summary: '[SA] Deactivate admin', description: 'Deactivate admin and revoke all active sessions' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Admin deactivated' })
  deactivate(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser('id') adminId: string,
  ) {
    return this.usersService.deactivate(id, adminId);
  }

  /**
   * PATCH /admin/users/:id/role
   * Change admin role (ADMIN ↔ EDITOR)
   */
  @Patch(':id/role')
  @Roles(Role.SUPER_ADMIN)
  @ApiOperation({ summary: '[SA] Change role', description: 'Change admin role between ADMIN and EDITOR' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Role updated' })
  @ApiResponse({ status: 403, description: 'Cannot change SUPER_ADMIN role or own role' })
  updateRole(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateRoleDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.usersService.updateRole(id, dto, adminId);
  }

  /**
   * POST /admin/users/:id/reset-password
   * Force reset admin password (no email, direct set)
   */
  @Post(':id/reset-password')
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '[SA] Reset admin password',
    description: 'Directly reset an admin password. All sessions are revoked afterward.',
  })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Password reset successfully' })
  async resetPassword(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ResetAdminPasswordDto,
    @CurrentUser('id') adminId: string,
  ) {
    await this.usersService.resetPassword(id, dto, adminId);
    return { success: true, message: 'Password has been reset. The admin will need to login again.' };
  }

  // ──────────────────────────────────────────────────────────────────
  // SESSION MANAGEMENT (Super Admin managing other admins' sessions)
  // ──────────────────────────────────────────────────────────────────

  /**
   * GET /admin/users/:id/sessions
   * View active sessions of a specific admin
   */
  @Get(':id/sessions')
  @Roles(Role.SUPER_ADMIN)
  @ApiOperation({ summary: '[SA] Get admin sessions', description: 'View all active sessions of a specific admin' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'Sessions retrieved' })
  getAdminSessions(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.getAdminSessions(id);
  }

  /**
   * DELETE /admin/users/:id/sessions
   * Revoke ALL sessions of an admin (force logout everywhere)
   */
  @Delete(':id/sessions')
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '[SA] Revoke all admin sessions',
    description: 'Force logout an admin from all devices',
  })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiResponse({ status: 200, description: 'All sessions revoked' })
  async revokeAllAdminSessions(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser('id') adminId: string,
  ) {
    const result = await this.usersService.revokeAllAdminSessions(id, adminId);
    return {
      success: true,
      message: `${result.revokedCount} session(s) revoked. Admin has been logged out from all devices.`,
      data: result,
    };
  }

  /**
   * DELETE /admin/users/:id/sessions/:sessionId
   * Revoke a specific session of an admin
   */
  @Delete(':id/sessions/:sessionId')
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[SA] Revoke specific session', description: 'Revoke a specific session for an admin' })
  @ApiParam({ name: 'id', description: 'Admin UUID' })
  @ApiParam({ name: 'sessionId', description: 'Session UUID' })
  @ApiResponse({ status: 200, description: 'Session revoked' })
  @ApiResponse({ status: 404, description: 'Session not found' })
  async revokeAdminSession(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('sessionId', ParseUUIDPipe) sessionId: string,
    @CurrentUser('id') adminId: string,
  ) {
    await this.usersService.revokeAdminSession(id, sessionId, adminId);
    return { success: true, message: 'Session has been revoked.' };
  }
}
