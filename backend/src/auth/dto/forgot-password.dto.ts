import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ForgotPasswordDto {
  @ApiProperty({ example: 'admin@example.com', description: 'Registered admin email' })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;
}
