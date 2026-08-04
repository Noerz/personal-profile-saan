import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsOptional, IsUrl } from 'class-validator';

export class UpdateAdminDto {
  @ApiPropertyOptional({ example: 'Budi Santoso', description: 'Admin full name' })
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @ApiPropertyOptional({ example: 'budi@example.com', description: 'Admin email address' })
  @IsOptional()
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email?: string;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.jpg', description: 'Avatar image URL' })
  @IsOptional()
  @IsString()
  avatar?: string;
}
