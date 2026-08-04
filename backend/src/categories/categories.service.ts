import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { QueryCategoryDto } from './dto/query-category.dto';
import { Category } from '../../generated/prisma';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async findAll(query: QueryCategoryDto): Promise<PaginatedResult<Category>> {
    return this.categoriesRepository.findAll(query);
  }

  async findOne(id: string): Promise<Category & { _count: { articles: number } }> {
    const category = await this.categoriesRepository.findByIdWithStats(id);
    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found.`);
    }
    return category;
  }

  async create(dto: CreateCategoryDto, adminId: string): Promise<Category> {
    const exists = await this.categoriesRepository.existsByName(dto.name);
    if (exists) {
      throw new ConflictException(`Category "${dto.name}" already exists.`);
    }

    const category = await this.categoriesRepository.create(dto);

    await this.categoriesRepository.createActivityLog({
      adminId,
      action: 'CREATE_CATEGORY',
      entity: 'Category',
      entityId: category.id,
      description: `Created category: ${category.name}`,
    });

    return category;
  }

  async update(id: string, dto: UpdateCategoryDto, adminId: string): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found.`);
    }

    if (dto.name && dto.name !== category.name) {
      const exists = await this.categoriesRepository.existsByName(dto.name, id);
      if (exists) {
        throw new ConflictException(`Category "${dto.name}" already exists.`);
      }
    }

    const updated = await this.categoriesRepository.update(id, dto);

    await this.categoriesRepository.createActivityLog({
      adminId,
      action: 'UPDATE_CATEGORY',
      entity: 'Category',
      entityId: id,
      description: `Updated category: ${updated.name}`,
    });

    return updated;
  }

  async remove(id: string, adminId: string): Promise<void> {
    const category = await this.categoriesRepository.findByIdWithStats(id);
    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found.`);
    }

    if (category._count.articles > 0) {
      throw new BadRequestException(
        `Cannot delete category "${category.name}" because it has ${category._count.articles} articles associated with it.`,
      );
    }

    await this.categoriesRepository.remove(id);

    await this.categoriesRepository.createActivityLog({
      adminId,
      action: 'DELETE_CATEGORY',
      entity: 'Category',
      entityId: id,
      description: `Deleted category: ${category.name}`,
    });
  }
}
