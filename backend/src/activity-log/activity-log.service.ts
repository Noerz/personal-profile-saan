import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryActivityLogDto } from './dto/query-activity-log.dto';
import { normalizePagination, buildPaginatedResult } from '../common/helpers/pagination.helper';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class ActivityLogService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: QueryActivityLogDto): Promise<PaginatedResult<any>> {
    const { page, limit, skip } = normalizePagination(query);

    const where: Prisma.ActivityLogWhereInput = {
      ...(query.action && { action: query.action }),
      ...(query.entity && { entity: query.entity }),
      ...(query.adminId && { adminId: query.adminId }),
    };

    if (query.startDate || query.endDate) {
      where.createdAt = {};
      if (query.startDate) {
        where.createdAt.gte = new Date(query.startDate);
      }
      if (query.endDate) {
        where.createdAt.lte = new Date(query.endDate);
      }
    }

    const orderBy = { createdAt: query.order || 'desc' };

    const [data, total] = await Promise.all([
      this.prisma.activityLog.findMany({
        where,
        include: {
          admin: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.activityLog.count({ where }),
    ]);

    return buildPaginatedResult(data, total, page, limit);
  }
}
