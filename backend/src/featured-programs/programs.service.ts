import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ProgramsRepository } from './programs.repository';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { QueryProgramDto } from './dto/query-program.dto';
import { ReorderProgramsDto } from './dto/reorder-programs.dto';
import { FeaturedProgram } from '../../generated/prisma';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { generateSlug } from '../common/helpers/slug.helper';

@Injectable()
export class ProgramsService {
  constructor(private readonly programsRepository: ProgramsRepository) {}

  // ─── ADMIN METHODS ─────────────────────────────────────────────────

  async findAllForAdmin(query: QueryProgramDto): Promise<PaginatedResult<FeaturedProgram>> {
    return this.programsRepository.findAll(query, false);
  }

  async findOneForAdmin(id: string): Promise<any> {
    const program = await this.programsRepository.findById(id);
    if (!program) {
      throw new NotFoundException(`Program with ID "${id}" not found.`);
    }
    return program;
  }

  async create(dto: CreateProgramDto, adminId: string): Promise<FeaturedProgram> {
    const slug = generateSlug(dto.title);
    const exists = await this.programsRepository.existsBySlug(slug);
    if (exists) {
      throw new ConflictException(`A program with a similar title already exists (slug conflict).`);
    }

    const program = await this.programsRepository.create(dto);

    await this.programsRepository.createActivityLog({
      adminId,
      action: 'CREATE_PROGRAM',
      entity: 'FeaturedProgram',
      entityId: program.id,
      description: `Created program: ${program.title}`,
    });

    return program;
  }

  async update(id: string, dto: UpdateProgramDto, adminId: string): Promise<FeaturedProgram> {
    const program = await this.programsRepository.findById(id);
    if (!program) {
      throw new NotFoundException(`Program with ID "${id}" not found.`);
    }

    if (dto.title && dto.title !== program.title) {
      const slug = generateSlug(dto.title);
      const exists = await this.programsRepository.existsBySlug(slug, id);
      if (exists) {
        throw new ConflictException(`A program with a similar title already exists (slug conflict).`);
      }
    }

    const updated = await this.programsRepository.update(id, dto);

    await this.programsRepository.createActivityLog({
      adminId,
      action: 'UPDATE_PROGRAM',
      entity: 'FeaturedProgram',
      entityId: id,
      description: `Updated program: ${updated.title}`,
    });

    return updated;
  }

  async remove(id: string, adminId: string): Promise<void> {
    const program = await this.programsRepository.findById(id);
    if (!program) {
      throw new NotFoundException(`Program with ID "${id}" not found.`);
    }

    await this.programsRepository.softDelete(id);

    await this.programsRepository.createActivityLog({
      adminId,
      action: 'DELETE_PROGRAM',
      entity: 'FeaturedProgram',
      entityId: id,
      description: `Soft deleted program: ${program.title}`,
    });
  }

  async reorder(dto: ReorderProgramsDto, adminId: string): Promise<void> {
    await this.programsRepository.reorder(dto);

    await this.programsRepository.createActivityLog({
      adminId,
      action: 'REORDER_PROGRAMS',
      entity: 'FeaturedProgram',
      description: `Reordered ${dto.programs.length} programs`,
    });
  }

  // ─── PUBLIC METHODS ────────────────────────────────────────────────

  async findAllForPublic(query: QueryProgramDto): Promise<PaginatedResult<FeaturedProgram>> {
    return this.programsRepository.findAll(query, true);
  }

  async findBySlugForPublic(slug: string): Promise<any> {
    const program = await this.programsRepository.findBySlug(slug, true);
    if (!program) {
      throw new NotFoundException(`Program not found.`);
    }
    return program;
  }
}
