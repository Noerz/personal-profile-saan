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

import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { QueryProgramDto } from './dto/query-program.dto';
import { ReorderProgramsDto } from './dto/reorder-programs.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Featured Programs')
@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  // ─── PUBLIC ENDPOINTS ──────────────────────────────────────────────

  /**
   * GET /programs
   * List all active programs for public viewing
   */
  @Public()
  @Get()
  @ApiOperation({ summary: 'List public programs', description: 'Get paginated list of active programs' })
  @ApiResponse({ status: 200, description: 'Programs retrieved successfully' })
  findAllPublic(@Query() query: QueryProgramDto) {
    return this.programsService.findAllForPublic(query);
  }

  /**
   * GET /programs/:slug
   * Get single active program by slug for public viewing
   */
  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get public program detail', description: 'Get active program by slug' })
  @ApiParam({ name: 'slug', description: 'Program slug' })
  @ApiResponse({ status: 200, description: 'Program retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  findOnePublic(@Param('slug') slug: string) {
    return this.programsService.findBySlugForPublic(slug);
  }

  // ─── ADMIN ENDPOINTS ───────────────────────────────────────────────

  /**
   * GET /programs/admin/list
   * List ALL programs (active and inactive) for admin dashboard
   */
  @Get('admin/list')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] List all programs', description: 'Get paginated list of all programs' })
  @ApiResponse({ status: 200, description: 'Programs retrieved successfully' })
  findAllAdmin(@Query() query: QueryProgramDto) {
    return this.programsService.findAllForAdmin(query);
  }

  /**
   * PATCH /programs/admin/reorder
   * Bulk update program orders
   */
  @Patch('admin/reorder')
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[Admin] Reorder programs', description: 'Bulk update the sorting order of programs' })
  @ApiResponse({ status: 200, description: 'Programs reordered successfully' })
  async reorder(
    @Body() dto: ReorderProgramsDto,
    @CurrentUser('id') adminId: string,
  ) {
    await this.programsService.reorder(dto, adminId);
    return { success: true, message: 'Programs reordered successfully.' };
  }

  /**
   * GET /programs/admin/detail/:id
   * Get single program detail by ID for admin editor
   */
  @Get('admin/detail/:id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Get program detail', description: 'Get full program details by ID' })
  @ApiParam({ name: 'id', description: 'Program UUID' })
  @ApiResponse({ status: 200, description: 'Program retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  findOneAdmin(@Param('id', ParseUUIDPipe) id: string) {
    return this.programsService.findOneForAdmin(id);
  }

  /**
   * POST /programs
   * Create a new program
   */
  @Post()
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '[Admin] Create program', description: 'Create a new program' })
  @ApiResponse({ status: 201, description: 'Program created' })
  @ApiResponse({ status: 409, description: 'Slug conflict' })
  create(@Body() dto: CreateProgramDto, @CurrentUser('id') adminId: string) {
    return this.programsService.create(dto, adminId);
  }

  /**
   * PATCH /programs/:id
   * Update a program
   */
  @Patch(':id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Update program', description: 'Update a program and its SEO metadata' })
  @ApiParam({ name: 'id', description: 'Program UUID' })
  @ApiResponse({ status: 200, description: 'Program updated' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProgramDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.programsService.update(id, dto, adminId);
  }

  /**
   * DELETE /programs/:id
   * Soft delete a program
   */
  @Delete(':id')
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[Admin] Delete program', description: 'Soft delete a program' })
  @ApiParam({ name: 'id', description: 'Program UUID' })
  @ApiResponse({ status: 200, description: 'Program deleted' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  async remove(@Param('id', ParseUUIDPipe) id: string, @CurrentUser('id') adminId: string) {
    await this.programsService.remove(id, adminId);
    return { success: true, message: 'Program deleted successfully.' };
  }
}
