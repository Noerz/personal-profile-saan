import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsIn, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ProgramStatus } from '../../common/enums/program-status.enum';

export class QueryProgramDto {
  @ApiPropertyOptional({ description: 'Search by title' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: ProgramStatus })
  @IsOptional()
  @IsEnum(ProgramStatus)
  status?: ProgramStatus;

  @ApiPropertyOptional({ description: 'Filter by highlight status', example: 'true' })
  @IsOptional()
  @IsIn(['true', 'false'])
  isHighlight?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({ default: 10 })
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @ApiPropertyOptional({ default: 'orderIndex', enum: ['title', 'createdAt', 'updatedAt', 'orderIndex'] })
  @IsOptional()
  @IsIn(['title', 'createdAt', 'updatedAt', 'orderIndex'])
  sortBy?: string = 'orderIndex';

  @ApiPropertyOptional({ default: 'asc', enum: ['asc', 'desc'] })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'asc';
}
