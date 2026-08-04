import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Article, Prisma } from '../../generated/prisma';
import { QueryArticleDto } from './dto/query-article.dto';
import { normalizePagination, buildPaginatedResult } from '../common/helpers/pagination.helper';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { generateSlug } from '../common/helpers/slug.helper';
import { calculateReadingTime } from '../common/helpers/reading-time.helper';
import { ArticleStatus } from '../common/enums/article-status.enum';

const ARTICLE_SELECT = {
  id: true,
  title: true,
  slug: true,
  excerpt: true,
  thumbnail: true,
  status: true,
  isFeatured: true,
  publishedAt: true,
  scheduledAt: true,
  viewCount: true,
  readingTime: true,
  createdAt: true,
  updatedAt: true,
  author: {
    select: {
      id: true,
      name: true,
      avatar: true,
    },
  },
  category: {
    select: {
      id: true,
      name: true,
      slug: true,
    },
  },
};

@Injectable()
export class ArticlesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: QueryArticleDto, forPublic = false): Promise<PaginatedResult<any>> {
    const { page, limit, skip } = normalizePagination(query);

    const where: Prisma.ArticleWhereInput = {
      deletedAt: null,
      ...(query.search && { title: { contains: query.search } }),
      ...(query.status && !forPublic && { status: query.status as any }),
      ...(query.isFeatured !== undefined && { isFeatured: query.isFeatured === 'true' }),
      ...(query.categoryId && { categoryId: query.categoryId }),
      ...(query.authorId && { authorId: query.authorId }),
    };

    if (forPublic) {
      where.status = ArticleStatus.PUBLISHED;
      where.publishedAt = { lte: new Date() };
    }

    const orderBy = { [query.sortBy || 'createdAt']: query.order || 'desc' };

    const [data, total] = await Promise.all([
      this.prisma.article.findMany({
        where,
        select: ARTICLE_SELECT,
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.article.count({ where }),
    ]);

    return buildPaginatedResult(data, total, page, limit);
  }

  async findById(id: string): Promise<any | null> {
    return this.prisma.article.findFirst({
      where: { id, deletedAt: null },
      include: {
        author: { select: { id: true, name: true, avatar: true } },
        category: { select: { id: true, name: true, slug: true } },
        seoMetadata: true,
      },
    });
  }

  async findBySlug(slug: string, forPublic = false): Promise<any | null> {
    const where: Prisma.ArticleWhereInput = { slug, deletedAt: null };
    
    if (forPublic) {
      where.status = ArticleStatus.PUBLISHED;
      where.publishedAt = { lte: new Date() };
    }

    return this.prisma.article.findFirst({
      where,
      include: {
        author: { select: { id: true, name: true, avatar: true } },
        category: { select: { id: true, name: true, slug: true } },
        seoMetadata: true,
      },
    });
  }

  async incrementViewCount(id: string): Promise<void> {
    await this.prisma.article.update({
      where: { id },
      data: { viewCount: { increment: 1 } },
    });
  }

  async existsByTitle(title: string, excludeId?: string): Promise<boolean> {
    const count = await this.prisma.article.count({
      where: {
        title,
        deletedAt: null,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    return count > 0;
  }

  async existsBySlug(slug: string, excludeId?: string): Promise<boolean> {
    const count = await this.prisma.article.count({
      where: {
        slug,
        deletedAt: null,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    return count > 0;
  }

  async create(data: any): Promise<Article> {
    const { seoMetadata, ...articleData } = data;
    
    // Auto generate slug and reading time
    articleData.slug = generateSlug(articleData.title);
    articleData.readingTime = calculateReadingTime(articleData.content);

    // Handle publishing logic
    if (articleData.status === ArticleStatus.PUBLISHED) {
      articleData.publishedAt = new Date();
    }

    return this.prisma.article.create({
      data: {
        ...articleData,
        ...(seoMetadata ? { seoMetadata: { create: seoMetadata } } : {}),
      },
      include: { seoMetadata: true, category: true },
    });
  }

  async update(id: string, data: any): Promise<Article> {
    const { seoMetadata, ...articleData } = data;

    // Auto generate slug if title changed
    if (articleData.title) {
      articleData.slug = generateSlug(articleData.title);
    }
    
    // Auto update reading time if content changed
    if (articleData.content) {
      articleData.readingTime = calculateReadingTime(articleData.content);
    }

    // Handle publishing logic
    if (articleData.status === ArticleStatus.PUBLISHED) {
      articleData.publishedAt = new Date();
    } else if (articleData.status === ArticleStatus.DRAFT) {
      articleData.publishedAt = null;
    }

    return this.prisma.article.update({
      where: { id },
      data: {
        ...articleData,
        ...(seoMetadata
          ? {
              seoMetadata: {
                upsert: {
                  create: seoMetadata,
                  update: seoMetadata,
                },
              },
            }
          : {}),
      },
      include: { seoMetadata: true, category: true },
    });
  }

  async softDelete(id: string): Promise<void> {
    await this.prisma.article.update({
      where: { id },
      data: { deletedAt: new Date() },
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
