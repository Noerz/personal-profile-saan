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

import { AspirationsService } from './aspirations.service';
import { CreateAspirationDto } from './dto/create-aspiration.dto';
import { ReplyAspirationDto } from './dto/reply-aspiration.dto';
import { QueryAspirationDto } from './dto/query-aspiration.dto';
import { CreateAspirationCategoryDto } from './dto/create-aspiration-category.dto';
import { UpdateAspirationCategoryDto } from './dto/update-aspiration-category.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Aspirations')
@Controller('aspirations')
export class AspirationsController {
  constructor(private readonly aspirationsService: AspirationsService) {}

  // ─── PUBLIC ENDPOINTS ──────────────────────────────────────────────

  /**
   * POST /aspirations
   * Submit a new aspiration (Public)
   */
  @Public()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Submit aspiration', description: 'Submit a new aspiration/feedback (Public)' })
  @ApiResponse({ status: 201, description: 'Aspiration submitted' })
  submit(@Body() dto: CreateAspirationDto) {
    return this.aspirationsService.submitAspiration(dto);
  }

  // ─── CATEGORIES (ADMIN) ────────────────────────────────────────────

  @Get('admin/categories')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] List aspiration categories', description: 'Get all aspiration categories' })
  @ApiResponse({ status: 200, description: 'Categories retrieved' })
  findAllCategories() {
    return this.aspirationsService.findAllCategories();
  }

  @Post('admin/categories')
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '[Admin] Create category', description: 'Create a new aspiration category' })
  createCategory(@Body() dto: CreateAspirationCategoryDto, @CurrentUser('id') adminId: string) {
    return this.aspirationsService.createCategory(dto, adminId);
  }

  @Patch('admin/categories/:id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Update category', description: 'Update an aspiration category' })
  updateCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateAspirationCategoryDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.aspirationsService.updateCategory(id, dto, adminId);
  }

  @Delete('admin/categories/:id')
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[Admin] Delete category', description: 'Delete an aspiration category' })
  async removeCategory(@Param('id', ParseUUIDPipe) id: string, @CurrentUser('id') adminId: string) {
    await this.aspirationsService.removeCategory(id, adminId);
    return { success: true, message: 'Category deleted successfully.' };
  }

  // ─── ASPIRATIONS (ADMIN) ───────────────────────────────────────────

  @Get('admin/list')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] List aspirations', description: 'Get paginated list of aspirations' })
  @ApiResponse({ status: 200, description: 'Aspirations retrieved' })
  findAllAdmin(@Query() query: QueryAspirationDto) {
    return this.aspirationsService.findAllForAdmin(query);
  }

  @Get('admin/detail/:id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Get aspiration detail', description: 'Get full details (auto-marks as READ if PENDING)' })
  @ApiParam({ name: 'id', description: 'Aspiration UUID' })
  @ApiResponse({ status: 200, description: 'Aspiration retrieved' })
  findOneAdmin(@Param('id', ParseUUIDPipe) id: string, @CurrentUser('id') adminId: string) {
    return this.aspirationsService.findOneForAdmin(id, adminId);
  }

  @Patch('admin/reply/:id')
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: '[Admin] Reply to aspiration', description: 'Reply to an aspiration and mark as REPLIED' })
  @ApiParam({ name: 'id', description: 'Aspiration UUID' })
  @ApiResponse({ status: 200, description: 'Replied successfully' })
  reply(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ReplyAspirationDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.aspirationsService.reply(id, dto, adminId);
  }

  @Delete('admin/:id')
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[Admin] Delete aspiration', description: 'Soft delete an aspiration' })
  @ApiParam({ name: 'id', description: 'Aspiration UUID' })
  @ApiResponse({ status: 200, description: 'Aspiration deleted' })
  async remove(@Param('id', ParseUUIDPipe) id: string, @CurrentUser('id') adminId: string) {
    await this.aspirationsService.remove(id, adminId);
    return { success: true, message: 'Aspiration deleted successfully.' };
  }
}
