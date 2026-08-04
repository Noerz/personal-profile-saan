import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ReplyAspirationDto {
  @ApiProperty({ example: 'Terima kasih atas sarannya, kami akan menindaklanjuti.' })
  @IsString()
  @IsNotEmpty()
  adminReply: string;
}
