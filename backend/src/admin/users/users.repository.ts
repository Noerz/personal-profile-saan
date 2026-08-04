import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Admin, RefreshToken } from '../../../generated/prisma';
import { QueryAdminDto } from './dto/query-admin.dto';
import { normalizePagination, buildPaginatedResult } from '../../common/helpers/pagination.helper';
import { PaginatedResult } from '../../common/interfaces/paginated-result.interface';

// Shape of the admin record returned to clients (no password)
export type AdminSafe = Omit<Admin, 'password'>;

// Reusable select clause — never expose the password field
const ADMIN_SAFE_SELECT = {
  id: true,
  name: true,
  email: true,
  role: true,
  avatar: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ─── Queries ───────────────────────────────────────────────────────

  async findAll(query: QueryAdminDto): Promise<PaginatedResult<AdminSafe>> {
    const { page, limit, skip } = normalizePagination(query);

    const where = {
      deletedAt: null,
      ...(query.search && {
        OR: [
          { name: { contains: query.search } },
          { email: { contains: query.search } },
        ],
      }),
      ...(query.role && { role: query.role }),
      ...(query.isActive !== undefined && { isActive: query.isActive === 'true' }),
    };

    const orderBy = { [query.sortBy || 'createdAt']: query.order || 'desc' };

    const [data, total] = await Promise.all([
      this.prisma.admin.findMany({
        where,
        select: ADMIN_SAFE_SELECT,
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.admin.count({ where }),
    ]);

    return buildPaginatedResult(data, total, page, limit);
  }

  async findById(id: string): Promise<AdminSafe | null> {
    return this.prisma.admin.findFirst({
      where: { id, deletedAt: null },
      select: ADMIN_SAFE_SELECT,
    });
  }

  async findByIdWithPassword(id: string): Promise<Admin | null> {
    return this.prisma.admin.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async findByEmail(email: string): Promise<Admin | null> {
    return this.prisma.admin.findFirst({
      where: { email: email.toLowerCase().trim(), deletedAt: null },
    });
  }

  async existsByEmail(email: string, excludeId?: string): Promise<boolean> {
    const count = await this.prisma.admin.count({
      where: {
        email: email.toLowerCase().trim(),
        deletedAt: null,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    return count > 0;
  }

  // Returns stats alongside the admin (for detail view)
  async findByIdWithStats(id: string): Promise<(AdminSafe & { _count: { articles: number; activityLogs: number } }) | null> {
    return this.prisma.admin.findFirst({
      where: { id, deletedAt: null },
      select: {
        ...ADMIN_SAFE_SELECT,
        _count: {
          select: {
            articles: true,
            activityLogs: true,
          },
        },
      },
    }) as Promise<(AdminSafe & { _count: { articles: number; activityLogs: number } }) | null>;
  }

  // ─── Mutations ─────────────────────────────────────────────────────

  async create(data: {
    name: string;
    email: string;
    password: string;
    role?: string;
  }): Promise<AdminSafe> {
    return this.prisma.admin.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase().trim(),
        password: data.password,
        role: (data.role as Admin['role']) || 'EDITOR',
        isActive: true,
      },
      select: ADMIN_SAFE_SELECT,
    });
  }

  async update(
    id: string,
    data: { name?: string; email?: string; avatar?: string },
  ): Promise<AdminSafe> {
    return this.prisma.admin.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.email && { email: data.email.toLowerCase().trim() }),
        ...(data.avatar !== undefined && { avatar: data.avatar }),
      },
      select: ADMIN_SAFE_SELECT,
    });
  }

  async updateRole(id: string, role: string): Promise<AdminSafe> {
    return this.prisma.admin.update({
      where: { id },
      data: { role: role as Admin['role'] },
      select: ADMIN_SAFE_SELECT,
    });
  }

  async updatePassword(id: string, hashedPassword: string): Promise<void> {
    await this.prisma.admin.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }

  async setActive(id: string, isActive: boolean): Promise<AdminSafe> {
    return this.prisma.admin.update({
      where: { id },
      data: { isActive },
      select: ADMIN_SAFE_SELECT,
    });
  }

  async softDelete(id: string): Promise<void> {
    await this.prisma.admin.update({
      where: { id },
      data: { deletedAt: new Date(), isActive: false },
    });
  }

  // ─── Session Management ────────────────────────────────────────────

  async getActiveSessions(adminId: string): Promise<RefreshToken[]> {
    return this.prisma.refreshToken.findMany({
      where: {
        adminId,
        isRevoked: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async revokeAllSessions(adminId: string): Promise<number> {
    const result = await this.prisma.refreshToken.updateMany({
      where: { adminId, isRevoked: false },
      data: { isRevoked: true },
    });
    return result.count;
  }

  async revokeSession(sessionId: string, adminId: string): Promise<boolean> {
    const session = await this.prisma.refreshToken.findFirst({
      where: { id: sessionId, adminId },
    });

    if (!session) return false;

    await this.prisma.refreshToken.update({
      where: { id: sessionId },
      data: { isRevoked: true },
    });

    return true;
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
        ...(metadata
          ? { metadata: metadata as Parameters<typeof this.prisma.activityLog.create>[0]['data']['metadata'] }
          : {}),
        ...(adminId ? { admin: { connect: { id: adminId } } } : {}),
      },
    });
  }
}
