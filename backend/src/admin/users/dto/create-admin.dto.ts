import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsString,
  MinLength,
  Matches,
  IsOptional,
} from 'class-validator';
import { Role } from '../../../common/enums/role.enum';

export class CreateAdminDto {
  @ApiProperty({ example: 'Budi Santoso', description: 'Full name of the admin' })
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  name: string;

  @ApiProperty({ example: 'budi@example.com', description: 'Admin email address' })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @ApiProperty({
    example: 'Admin@123!',
    description: 'Password (min 8 chars, must include uppercase, lowercase, number, special char)',
  })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message: 'Password must contain uppercase, lowercase, number, and special character',
  })
  password: string;

  @ApiPropertyOptional({
    enum: Role,
    default: Role.EDITOR,
    description: 'Admin role (SUPER_ADMIN cannot be assigned via this endpoint)',
  })
  @IsOptional()
  @IsEnum(Role, { message: `Role must be one of: ${Object.values(Role).join(', ')}` })
  role?: Role;
}
