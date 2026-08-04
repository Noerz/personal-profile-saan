import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ArticlesRepository } from './articles.repository';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { QueryArticleDto } from './dto/query-article.dto';
import { Article } from '../../generated/prisma';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { generateSlug } from '../common/helpers/slug.helper';

@Injectable()
export class ArticlesService {
  constructor(private readonly articlesRepository: ArticlesRepository) {}

  // ─── ADMIN METHODS ─────────────────────────────────────────────────

  async findAllForAdmin(query: QueryArticleDto): Promise<PaginatedResult<Article>> {
    return this.articlesRepository.findAll(query, false);
  }

  async findOneForAdmin(id: string): Promise<any> {
    const article = await this.articlesRepository.findById(id);
    if (!article) {
      throw new NotFoundException(`Article with ID "${id}" not found.`);
    }
    return article;
  }

  async create(dto: CreateArticleDto, authorId: string): Promise<Article> {
    // Check if title generates a conflicting slug
    const slug = generateSlug(dto.title);
    const exists = await this.articlesRepository.existsBySlug(slug);
    if (exists) {
      throw new ConflictException(`An article with a similar title already exists (slug conflict).`);
    }

    const article = await this.articlesRepository.create({
      ...dto,
      authorId,
    });

    await this.articlesRepository.createActivityLog({
      adminId: authorId,
      action: 'CREATE_ARTICLE',
      entity: 'Article',
      entityId: article.id,
      description: `Created article: ${article.title} [${article.status}]`,
    });

    return article;
  }

  async update(id: string, dto: UpdateArticleDto, adminId: string): Promise<Article> {
    const article = await this.articlesRepository.findById(id);
    if (!article) {
      throw new NotFoundException(`Article with ID "${id}" not found.`);
    }

    // Check slug conflict if title is updated
    if (dto.title && dto.title !== article.title) {
      const slug = generateSlug(dto.title);
      const exists = await this.articlesRepository.existsBySlug(slug, id);
      if (exists) {
        throw new ConflictException(`An article with a similar title already exists (slug conflict).`);
      }
    }

    const updated = await this.articlesRepository.update(id, dto);

    await this.articlesRepository.createActivityLog({
      adminId,
      action: 'UPDATE_ARTICLE',
      entity: 'Article',
      entityId: id,
      description: `Updated article: ${updated.title} [${updated.status}]`,
    });

    return updated;
  }

  async remove(id: string, adminId: string): Promise<void> {
    const article = await this.articlesRepository.findById(id);
    if (!article) {
      throw new NotFoundException(`Article with ID "${id}" not found.`);
    }

    await this.articlesRepository.softDelete(id);

    await this.articlesRepository.createActivityLog({
      adminId,
      action: 'DELETE_ARTICLE',
      entity: 'Article',
      entityId: id,
      description: `Soft deleted article: ${article.title}`,
    });
  }

  // ─── PUBLIC METHODS ────────────────────────────────────────────────

  async findAllForPublic(query: QueryArticleDto): Promise<PaginatedResult<Article>> {
    return this.articlesRepository.findAll(query, true);
  }

  async findBySlugForPublic(slug: string): Promise<any> {
    const article = await this.articlesRepository.findBySlug(slug, true);
    if (!article) {
      throw new NotFoundException(`Article not found.`);
    }

    // Increment view count asynchronously (fire and forget)
    void this.articlesRepository.incrementViewCount(article.id);

    return article;
  }
}
