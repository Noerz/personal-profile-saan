import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSelfDto {
  @ApiPropertyOptional({ example: 'Budi Santoso', description: 'Your display name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.jpg', description: 'Avatar image URL' })
  @IsOptional()
  @IsString()
  avatar?: string;
}
