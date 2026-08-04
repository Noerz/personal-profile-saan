import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { AspirationsRepository } from './aspirations.repository';
import { CreateAspirationDto } from './dto/create-aspiration.dto';
import { ReplyAspirationDto } from './dto/reply-aspiration.dto';
import { QueryAspirationDto } from './dto/query-aspiration.dto';
import { CreateAspirationCategoryDto } from './dto/create-aspiration-category.dto';
import { UpdateAspirationCategoryDto } from './dto/update-aspiration-category.dto';
import { Aspiration, AspirationCategory } from '../../generated/prisma';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { AspirationStatus } from '../common/enums/aspiration-status.enum';

@Injectable()
export class AspirationsService {
  constructor(private readonly aspirationsRepository: AspirationsRepository) {}

  // ─── ASPIRATIONS (PUBLIC) ──────────────────────────────────────────

  async submitAspiration(dto: CreateAspirationDto): Promise<Aspiration> {
    if (dto.categoryId) {
      const category = await this.aspirationsRepository.findCategoryById(dto.categoryId);
      if (!category) {
        throw new NotFoundException(`Category with ID "${dto.categoryId}" not found.`);
      }
    }
    return this.aspirationsRepository.create(dto);
  }

  // ─── ASPIRATIONS (ADMIN) ───────────────────────────────────────────

  async findAllForAdmin(query: QueryAspirationDto): Promise<PaginatedResult<Aspiration>> {
    return this.aspirationsRepository.findAll(query);
  }

  async findOneForAdmin(id: string, adminId: string): Promise<any> {
    const aspiration = await this.aspirationsRepository.findById(id);
    if (!aspiration) {
      throw new NotFoundException(`Aspiration with ID "${id}" not found.`);
    }

    // Automatically mark as READ if it's currently PENDING
    if (aspiration.status === AspirationStatus.PENDING) {
      await this.aspirationsRepository.updateStatus(id, AspirationStatus.READ);
      aspiration.status = AspirationStatus.READ;
      
      await this.aspirationsRepository.createActivityLog({
        adminId,
        action: 'READ_ASPIRATION',
        entity: 'Aspiration',
        entityId: id,
        description: `Marked aspiration from ${aspiration.name} as READ`,
      });
    }

    return aspiration;
  }

  async reply(id: string, dto: ReplyAspirationDto, adminId: string): Promise<Aspiration> {
    const aspiration = await this.aspirationsRepository.findById(id);
    if (!aspiration) {
      throw new NotFoundException(`Aspiration with ID "${id}" not found.`);
    }

    const updated = await this.aspirationsRepository.reply(id, dto.adminReply, adminId);

    await this.aspirationsRepository.createActivityLog({
      adminId,
      action: 'REPLY_ASPIRATION',
      entity: 'Aspiration',
      entityId: id,
      description: `Replied to aspiration from ${updated.name}`,
    });

    return updated;
  }

  async remove(id: string, adminId: string): Promise<void> {
    const aspiration = await this.aspirationsRepository.findById(id);
    if (!aspiration) {
      throw new NotFoundException(`Aspiration with ID "${id}" not found.`);
    }

    await this.aspirationsRepository.softDelete(id);

    await this.aspirationsRepository.createActivityLog({
      adminId,
      action: 'DELETE_ASPIRATION',
      entity: 'Aspiration',
      entityId: id,
      description: `Soft deleted aspiration from ${aspiration.name}`,
    });
  }

  // ─── CATEGORIES (ADMIN) ────────────────────────────────────────────

  async findAllCategories(): Promise<AspirationCategory[]> {
    return this.aspirationsRepository.findAllCategories();
  }

  async createCategory(dto: CreateAspirationCategoryDto, adminId: string): Promise<AspirationCategory> {
    const exists = await this.aspirationsRepository.existsCategoryByName(dto.name);
    if (exists) {
      throw new ConflictException(`Category "${dto.name}" already exists.`);
    }

    const category = await this.aspirationsRepository.createCategory(dto.name);

    await this.aspirationsRepository.createActivityLog({
      adminId,
      action: 'CREATE_ASPIRATION_CATEGORY',
      entity: 'AspirationCategory',
      entityId: category.id,
      description: `Created aspiration category: ${category.name}`,
    });

    return category;
  }

  async updateCategory(id: string, dto: UpdateAspirationCategoryDto, adminId: string): Promise<AspirationCategory> {
    const category = await this.aspirationsRepository.findCategoryById(id);
    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found.`);
    }

    if (dto.name && dto.name !== category.name) {
      const exists = await this.aspirationsRepository.existsCategoryByName(dto.name, id);
      if (exists) {
        throw new ConflictException(`Category "${dto.name}" already exists.`);
      }
    }

    const updated = await this.aspirationsRepository.updateCategory(id, dto.name!);

    await this.aspirationsRepository.createActivityLog({
      adminId,
      action: 'UPDATE_ASPIRATION_CATEGORY',
      entity: 'AspirationCategory',
      entityId: id,
      description: `Updated aspiration category: ${updated.name}`,
    });

    return updated;
  }

  async removeCategory(id: string, adminId: string): Promise<void> {
    const category = await this.aspirationsRepository.findCategoryById(id);
    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found.`);
    }

    // Check if category is used by aspirations (if needed, but schema uses SetNull for onDelete)
    // Here we can just delete it, Prisma will set categoryId to null on aspirations.
    await this.aspirationsRepository.removeCategory(id);

    await this.aspirationsRepository.createActivityLog({
      adminId,
      action: 'DELETE_ASPIRATION_CATEGORY',
      entity: 'AspirationCategory',
      entityId: id,
      description: `Deleted aspiration category: ${category.name}`,
    });
  }
}
