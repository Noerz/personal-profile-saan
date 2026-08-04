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
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';

import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { QueryArticleDto } from './dto/query-article.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  // ─── PUBLIC ENDPOINTS ──────────────────────────────────────────────

  /**
   * GET /articles
   * List all PUBLISHED articles for public viewing
   */
  @Public()
  @Get()
  @ApiOperation({ summary: 'List public articles', description: 'Get paginated list of published articles' })
  @ApiResponse({ status: 200, description: 'Articles retrieved successfully' })
  findAllPublic(@Query() query: QueryArticleDto) {
    return this.articlesService.findAllForPublic(query);
  }

  /**
   * GET /articles/:slug
   * Get single PUBLISHED article by slug for public viewing
   */
  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get public article detail', description: 'Get published article by slug (increments view count)' })
  @ApiParam({ name: 'slug', description: 'Article slug' })
  @ApiResponse({ status: 200, description: 'Article retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Article not found' })
  findOnePublic(@Param('slug') slug: string) {
    return this.articlesService.findBySlugForPublic(slug);
  }

  // ─── ADMIN ENDPOINTS ───────────────────────────────────────────────

  /**
   * GET /articles/admin/list
   * List ALL articles (draft, published, etc) for admin dashboard
   */
  @Get('admin/list')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] List all articles', description: 'Get paginated list of all articles including drafts' })
  @ApiResponse({ status: 200, description: 'Articles retrieved successfully' })
  findAllAdmin(@Query() query: QueryArticleDto) {
    return this.articlesService.findAllForAdmin(query);
  }

  /**
   * GET /articles/admin/detail/:id
   * Get single article detail by ID for admin editor
   */
  @Get('admin/detail/:id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Get article detail', description: 'Get full article details by ID' })
  @ApiParam({ name: 'id', description: 'Article UUID' })
  @ApiResponse({ status: 200, description: 'Article retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Article not found' })
  findOneAdmin(@Param('id', ParseUUIDPipe) id: string) {
    return this.articlesService.findOneForAdmin(id);
  }

  /**
   * POST /articles
   * Create a new article
   */
  @Post()
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '[Admin] Create article', description: 'Create a new article (draft or published)' })
  @ApiResponse({ status: 201, description: 'Article created' })
  @ApiResponse({ status: 409, description: 'Slug conflict' })
  create(@Body() dto: CreateArticleDto, @CurrentUser('id') adminId: string) {
    return this.articlesService.create(dto, adminId);
  }

  /**
   * PATCH /articles/:id
   * Update an article
   */
  @Patch(':id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Update article', description: 'Update an article and its SEO metadata' })
  @ApiParam({ name: 'id', description: 'Article UUID' })
  @ApiResponse({ status: 200, description: 'Article updated' })
  @ApiResponse({ status: 404, description: 'Article not found' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateArticleDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.articlesService.update(id, dto, adminId);
  }

  /**
   * DELETE /articles/:id
   * Soft delete an article
   */
  @Delete(':id')
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[Admin] Delete article', description: 'Soft delete an article' })
  @ApiParam({ name: 'id', description: 'Article UUID' })
  @ApiResponse({ status: 200, description: 'Article deleted' })
  @ApiResponse({ status: 404, description: 'Article not found' })
  async remove(@Param('id', ParseUUIDPipe) id: string, @CurrentUser('id') adminId: string) {
    await this.articlesService.remove(id, adminId);
    return { success: true, message: 'Article deleted successfully.' };
  }
}
