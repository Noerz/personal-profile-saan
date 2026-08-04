import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { AspirationStatus } from '../../common/enums/aspiration-status.enum';

export class QueryAspirationDto {
  @ApiPropertyOptional({ description: 'Search by title, name, or email' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: AspirationStatus })
  @IsOptional()
  @IsEnum(AspirationStatus)
  status?: AspirationStatus;

  @ApiPropertyOptional({ description: 'Filter by category ID' })
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({ default: 10 })
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @ApiPropertyOptional({ default: 'createdAt', enum: ['title', 'createdAt', 'repliedAt', 'status'] })
  @IsOptional()
  @IsIn(['title', 'createdAt', 'repliedAt', 'status'])
  sortBy?: string = 'createdAt';

  @ApiPropertyOptional({ default: 'desc', enum: ['asc', 'desc'] })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'desc';
}
