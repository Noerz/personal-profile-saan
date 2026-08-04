import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FeaturedProgram, Prisma } from '../../generated/prisma';
import { QueryProgramDto } from './dto/query-program.dto';
import { ReorderProgramsDto } from './dto/reorder-programs.dto';
import { normalizePagination, buildPaginatedResult } from '../common/helpers/pagination.helper';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { generateSlug } from '../common/helpers/slug.helper';
import { ProgramStatus } from '../common/enums/program-status.enum';

const PROGRAM_SELECT = {
  id: true,
  title: true,
  slug: true,
  description: true,
  thumbnail: true,
  status: true,
  isHighlight: true,
  orderIndex: true,
  startDate: true,
  endDate: true,
  createdAt: true,
  updatedAt: true,
};

@Injectable()
export class ProgramsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: QueryProgramDto, forPublic = false): Promise<PaginatedResult<any>> {
    const { page, limit, skip } = normalizePagination(query);

    const where: Prisma.FeaturedProgramWhereInput = {
      deletedAt: null,
      ...(query.search && { title: { contains: query.search } }),
      ...(query.status && !forPublic && { status: query.status as any }),
      ...(query.isHighlight !== undefined && { isHighlight: query.isHighlight === 'true' }),
    };

    if (forPublic) {
      where.status = ProgramStatus.ACTIVE;
    }

    const orderBy = { [query.sortBy || 'orderIndex']: query.order || 'asc' };

    const [data, total] = await Promise.all([
      this.prisma.featuredProgram.findMany({
        where,
        select: PROGRAM_SELECT,
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.featuredProgram.count({ where }),
    ]);

    return buildPaginatedResult(data, total, page, limit);
  }

  async findById(id: string): Promise<any | null> {
    return this.prisma.featuredProgram.findFirst({
      where: { id, deletedAt: null },
      include: {
        galleries: { orderBy: { orderIndex: 'asc' } },
        seoMetadata: true,
      },
    });
  }

  async findBySlug(slug: string, forPublic = false): Promise<any | null> {
    const where: Prisma.FeaturedProgramWhereInput = { slug, deletedAt: null };
    
    if (forPublic) {
      where.status = ProgramStatus.ACTIVE;
    }

    return this.prisma.featuredProgram.findFirst({
      where,
      include: {
        galleries: { orderBy: { orderIndex: 'asc' } },
        seoMetadata: true,
      },
    });
  }

  async existsBySlug(slug: string, excludeId?: string): Promise<boolean> {
    const count = await this.prisma.featuredProgram.count({
      where: {
        slug,
        deletedAt: null,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    return count > 0;
  }

  async create(data: any): Promise<FeaturedProgram> {
    const { seoMetadata, galleries, ...programData } = data;
    
    programData.slug = generateSlug(programData.title);

    return this.prisma.featuredProgram.create({
      data: {
        ...programData,
        ...(seoMetadata ? { seoMetadata: { create: seoMetadata } } : {}),
        ...(galleries && galleries.length > 0
          ? { galleries: { create: galleries } }
          : {}),
      },
      include: { seoMetadata: true, galleries: true },
    });
  }

  async update(id: string, data: any): Promise<FeaturedProgram> {
    const { seoMetadata, galleries, ...programData } = data;

    if (programData.title) {
      programData.slug = generateSlug(programData.title);
    }

    // Prepare update data
    const updateData: Prisma.FeaturedProgramUpdateInput = {
      ...programData,
    };

    if (seoMetadata) {
      updateData.seoMetadata = {
        upsert: {
          create: seoMetadata,
          update: seoMetadata,
        },
      };
    }

    if (galleries) {
      // Recreate galleries: delete old ones and create new ones
      updateData.galleries = {
        deleteMany: {},
        create: galleries,
      };
    }

    return this.prisma.featuredProgram.update({
      where: { id },
      data: updateData,
      include: { seoMetadata: true, galleries: true },
    });
  }

  async reorder(data: ReorderProgramsDto): Promise<void> {
    // Perform bulk update in a transaction
    const operations = data.programs.map((item) =>
      this.prisma.featuredProgram.update({
        where: { id: item.id },
        data: { orderIndex: item.orderIndex },
      }),
    );
    await this.prisma.$transaction(operations);
  }

  async softDelete(id: string): Promise<void> {
    await this.prisma.featuredProgram.update({
      where: { id },
      data: { deletedAt: new Date(), status: ProgramStatus.INACTIVE },
    });
  }

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
