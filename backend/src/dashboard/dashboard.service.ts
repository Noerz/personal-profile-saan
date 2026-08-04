import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboardStats() {
    const [
      totalArticles,
      totalPrograms,
      totalAspirations,
      unreadAspirations,
      recentAspirations,
      popularArticles,
    ] = await Promise.all([
      this.prisma.article.count({ where: { deletedAt: null } }),
      this.prisma.featuredProgram.count({ where: { deletedAt: null } }),
      this.prisma.aspiration.count(),
      this.prisma.aspiration.count({ where: { status: 'PENDING' } }),
      
      // Get 5 most recent pending aspirations
      this.prisma.aspiration.findMany({
        where: { status: 'PENDING' },
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          name: true,
          title: true,
          createdAt: true,
        },
      }),

      // Get 5 most viewed published articles
      this.prisma.article.findMany({
        where: { deletedAt: null, status: 'PUBLISHED' },
        orderBy: { viewCount: 'desc' },
        take: 5,
        select: {
          id: true,
          title: true,
          viewCount: true,
          publishedAt: true,
        },
      }),
    ]);

    // Aggregate article views total
    const viewCountAggregate = await this.prisma.article.aggregate({
      where: { deletedAt: null },
      _sum: { viewCount: true },
    });

    const totalViews = viewCountAggregate._sum.viewCount || 0;

    return {
      overview: {
        totalArticles,
        totalPrograms,
        totalAspirations,
        unreadAspirations,
        totalViews,
      },
      recentAspirations,
      popularArticles,
    };
  }
}
