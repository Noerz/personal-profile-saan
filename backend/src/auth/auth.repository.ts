import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Admin, RefreshToken } from '../../generated/prisma';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ─── Admin Queries ─────────────────────────────────────────────────

  async findAdminByEmail(email: string): Promise<Admin | null> {
    return this.prisma.admin.findFirst({
      where: {
        email: email.toLowerCase().trim(),
        deletedAt: null,
      },
    });
  }

  async findAdminById(id: string): Promise<Admin | null> {
    return this.prisma.admin.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async updateAdminPassword(adminId: string, hashedPassword: string): Promise<void> {
    await this.prisma.admin.update({
      where: { id: adminId },
      data: { password: hashedPassword },
    });
  }

  // ─── Refresh Token ─────────────────────────────────────────────────

  async createRefreshToken(data: {
    adminId: string;
    tokenHash: string;
    expiresAt: Date;
    ipAddress?: string;
    userAgent?: string;
  }): Promise<RefreshToken> {
    return this.prisma.refreshToken.create({ data });
  }

  async findRefreshTokenById(id: string): Promise<RefreshToken | null> {
    return this.prisma.refreshToken.findFirst({
      where: { id, isRevoked: false },
    });
  }

  async revokeRefreshToken(id: string): Promise<void> {
    await this.prisma.refreshToken.update({
      where: { id },
      data: { isRevoked: true },
    });
  }

  async updateRefreshTokenHash(id: string, tokenHash: string): Promise<void> {
    await this.prisma.refreshToken.update({
      where: { id },
      data: { tokenHash },
    });
  }

  async revokeAllAdminTokens(adminId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { adminId, isRevoked: false },
      data: { isRevoked: true },
    });
  }

  async cleanupExpiredTokens(adminId: string): Promise<void> {
    await this.prisma.refreshToken.deleteMany({
      where: {
        adminId,
        OR: [{ isRevoked: true }, { expiresAt: { lt: new Date() } }],
      },
    });
  }

  async getActiveSessionsByAdminId(adminId: string): Promise<RefreshToken[]> {
    return this.prisma.refreshToken.findMany({
      where: {
        adminId,
        isRevoked: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ─── Password Reset ────────────────────────────────────────────────

  async upsertPasswordResetToken(adminId: string, tokenHash: string, expiresAt: Date): Promise<void> {
    // Store reset token in a JSON metadata field on the admin (simple approach)
    // For production, use a dedicated password_reset_tokens table
    await this.prisma.admin.update({
      where: { id: adminId },
      data: {
        // Store in activityLogs or use a simple JSON approach
        // We'll use a dedicated approach via metadata in ActivityLog
        updatedAt: new Date(),
      },
    });

    // Store in activity log as a lightweight token store
    await this.prisma.activityLog.create({
      data: {
        adminId,
        action: 'PASSWORD_RESET_REQUEST',
        entity: 'Admin',
        entityId: adminId,
        metadata: {
          tokenHash,
          expiresAt: expiresAt.toISOString(),
          used: false,
        },
      },
    });
  }

  async findValidResetToken(tokenHash: string): Promise<{ adminId: string; logId: string } | null> {
    const log = await this.prisma.activityLog.findFirst({
      where: {
        action: 'PASSWORD_RESET_REQUEST',
        createdAt: { gt: new Date(Date.now() - 60 * 60 * 1000) }, // Last 1 hour
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!log || !log.adminId) return null;

    const metadata = log.metadata as { tokenHash: string; expiresAt: string; used: boolean };
    if (metadata.used) return null;
    if (metadata.tokenHash !== tokenHash) return null;
    if (new Date(metadata.expiresAt) < new Date()) return null;

    return { adminId: log.adminId, logId: log.id };
  }

  async markResetTokenUsed(logId: string): Promise<void> {
    const log = await this.prisma.activityLog.findUnique({ where: { id: logId } });
    if (!log) return;

    const metadata = log.metadata as Record<string, unknown>;
    await this.prisma.activityLog.update({
      where: { id: logId },
      data: { metadata: { ...metadata, used: true } },
    });
  }

  // ─── Activity Log ──────────────────────────────────────────────────

  async createActivityLog(data: {
    adminId?: string;
    action: string;
    entity?: string;
    entityId?: string;
    description?: string;
    metadata?: Record<string, unknown>;
    ipAddress?: string;
    userAgent?: string;
  }): Promise<void> {
    const { adminId, metadata, ...rest } = data;
    await this.prisma.activityLog.create({
      data: {
        ...rest,
        // Cast metadata to satisfy Prisma's InputJsonValue type
        ...(metadata ? { metadata: metadata as Parameters<typeof this.prisma.activityLog.create>[0]['data']['metadata'] } : {}),
        ...(adminId ? { admin: { connect: { id: adminId } } } : {}),
      },
    });
  }
}
