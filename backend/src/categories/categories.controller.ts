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

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { QueryCategoryDto } from './dto/query-category.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  /**
   * GET /categories
   * Public endpoint to list all categories
   */
  @Public()
  @Get()
  @ApiOperation({ summary: 'List categories', description: 'Get paginated list of categories with search' })
  @ApiResponse({ status: 200, description: 'Categories retrieved successfully' })
  findAll(@Query() query: QueryCategoryDto) {
    return this.categoriesService.findAll(query);
  }

  /**
   * GET /categories/:id
   * Public endpoint to get a single category
   */
  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get category detail', description: 'Get category by ID' })
  @ApiParam({ name: 'id', description: 'Category UUID' })
  @ApiResponse({ status: 200, description: 'Category retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.findOne(id);
  }

  /**
   * POST /categories
   * Protected endpoint to create a category
   */
  @Post()
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '[Admin] Create category', description: 'Create a new category' })
  @ApiResponse({ status: 201, description: 'Category created' })
  @ApiResponse({ status: 409, description: 'Category name already exists' })
  create(@Body() dto: CreateCategoryDto, @CurrentUser('id') adminId: string) {
    return this.categoriesService.create(dto, adminId);
  }

  /**
   * PATCH /categories/:id
   * Protected endpoint to update a category
   */
  @Patch(':id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Update category', description: 'Update a category name or description' })
  @ApiParam({ name: 'id', description: 'Category UUID' })
  @ApiResponse({ status: 200, description: 'Category updated' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCategoryDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.categoriesService.update(id, dto, adminId);
  }

  /**
   * DELETE /categories/:id
   * Protected endpoint to delete a category
   */
  @Delete(':id')
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[Admin] Delete category', description: 'Delete a category if it has no associated articles' })
  @ApiParam({ name: 'id', description: 'Category UUID' })
  @ApiResponse({ status: 200, description: 'Category deleted' })
  @ApiResponse({ status: 400, description: 'Cannot delete category with associated articles' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  async remove(@Param('id', ParseUUIDPipe) id: string, @CurrentUser('id') adminId: string) {
    await this.categoriesService.remove(id, adminId);
    return { success: true, message: 'Category deleted successfully.' };
  }
}
