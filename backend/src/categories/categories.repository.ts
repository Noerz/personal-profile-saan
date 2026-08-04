import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Category } from '../../generated/prisma';
import { QueryCategoryDto } from './dto/query-category.dto';
import { normalizePagination, buildPaginatedResult } from '../common/helpers/pagination.helper';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { generateSlug } from '../common/helpers/slug.helper';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: QueryCategoryDto): Promise<PaginatedResult<Category>> {
    const { page, limit, skip } = normalizePagination(query);

    const where = query.search
      ? {
          name: { contains: query.search },
        }
      : {};

    const orderBy = { [query.sortBy || 'name']: query.order || 'asc' };

    const [data, total] = await Promise.all([
      this.prisma.category.findMany({
        where,
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.category.count({ where }),
    ]);

    return buildPaginatedResult(data, total, page, limit);
  }

  async findById(id: string): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { slug },
    });
  }

  async findByIdWithStats(id: string): Promise<(Category & { _count: { articles: number } }) | null> {
    return this.prisma.category.findUnique({
      where: { id },
      include: {
        _count: {
          select: { articles: true },
        },
      },
    });
  }

  async existsByName(name: string, excludeId?: string): Promise<boolean> {
    const count = await this.prisma.category.count({
      where: {
        name,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    return count > 0;
  }

  async create(data: { name: string; description?: string }): Promise<Category> {
    return this.prisma.category.create({
      data: {
        name: data.name,
        slug: generateSlug(data.name),
        description: data.description,
      },
    });
  }

  async update(id: string, data: { name?: string; description?: string }): Promise<Category> {
    const updateData: any = { ...data };
    
    // Automatically update slug if name is changed
    if (data.name) {
      updateData.slug = generateSlug(data.name);
    }

    return this.prisma.category.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: { id },
    });
  }

  async createActivityLog(data: {
    adminId: string;
    action: string;
    entity: string;
    entityId: string;
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
