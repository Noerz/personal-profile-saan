import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Aspiration, AspirationCategory, Prisma } from '../../generated/prisma';
import { QueryAspirationDto } from './dto/query-aspiration.dto';
import { normalizePagination, buildPaginatedResult } from '../common/helpers/pagination.helper';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { generateSlug } from '../common/helpers/slug.helper';
import { AspirationStatus } from '../common/enums/aspiration-status.enum';

@Injectable()
export class AspirationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ─── ASPIRATIONS ───────────────────────────────────────────────────

  async findAll(query: QueryAspirationDto): Promise<PaginatedResult<any>> {
    const { page, limit, skip } = normalizePagination(query);

    const where: Prisma.AspirationWhereInput = {
      ...(query.search && {
        OR: [
          { title: { contains: query.search } },
          { name: { contains: query.search } },
          { email: { contains: query.search } },
        ],
      }),
      ...(query.status && { status: query.status as any }),
      ...(query.categoryId && { categoryId: query.categoryId }),
    };

    const orderBy = { [query.sortBy || 'createdAt']: query.order || 'desc' };

    const [data, total] = await Promise.all([
      this.prisma.aspiration.findMany({
        where,
        include: {
          category: { select: { id: true, name: true } },
          repliedBy: { select: { id: true, name: true } },
        },
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.aspiration.count({ where }),
    ]);

    return buildPaginatedResult(data, total, page, limit);
  }

  async findById(id: string): Promise<any | null> {
    return this.prisma.aspiration.findFirst({
      where: { id },
      include: {
        category: { select: { id: true, name: true } },
        repliedBy: { select: { id: true, name: true } },
      },
    });
  }

  async create(data: any): Promise<Aspiration> {
    return this.prisma.aspiration.create({
      data,
    });
  }

  async reply(id: string, adminReply: string, repliedById: string): Promise<Aspiration> {
    return this.prisma.aspiration.update({
      where: { id },
      data: {
        adminReply,
        repliedById,
        repliedAt: new Date(),
        status: AspirationStatus.REPLIED,
      },
    });
  }

  async updateStatus(id: string, status: string): Promise<Aspiration> {
    return this.prisma.aspiration.update({
      where: { id },
      data: { status: status as any },
    });
  }

  async softDelete(id: string): Promise<void> {
    await this.prisma.aspiration.delete({
      where: { id },
    });
  }

  // ─── CATEGORIES ────────────────────────────────────────────────────

  async findAllCategories(): Promise<AspirationCategory[]> {
    return this.prisma.aspirationCategory.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findCategoryById(id: string): Promise<AspirationCategory | null> {
    return this.prisma.aspirationCategory.findUnique({
      where: { id },
    });
  }

  async findCategoryBySlug(slug: string): Promise<AspirationCategory | null> {
    return this.prisma.aspirationCategory.findUnique({
      where: { slug },
    });
  }

  async existsCategoryByName(name: string, excludeId?: string): Promise<boolean> {
    const count = await this.prisma.aspirationCategory.count({
      where: {
        name,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    return count > 0;
  }

  async createCategory(name: string): Promise<AspirationCategory> {
    return this.prisma.aspirationCategory.create({
      data: {
        name,
        slug: generateSlug(name),
      },
    });
  }

  async updateCategory(id: string, name: string): Promise<AspirationCategory> {
    return this.prisma.aspirationCategory.update({
      where: { id },
      data: {
        name,
        slug: generateSlug(name),
      },
    });
  }

  async removeCategory(id: string): Promise<void> {
    await this.prisma.aspirationCategory.delete({
      where: { id },
    });
  }

  // ─── LOGGING ───────────────────────────────────────────────────────

  async createActivityLog(data: {
    adminId: string;
    action: string;
    entity: string;
    entityId?: string;
    description: string;
  }): Promise<void> {
    await this.prisma.activityLog.create({
      data: {
        adminId: data.adminId,
        action: data.action,
        entity: data.entity,
        entityId: data.entityId,
        description: data.description,
      },
    });
  }
}
