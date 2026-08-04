import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ProgramOrderDto {
  @ApiProperty({ description: 'Program ID (UUID)' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'New order position' })
  @IsInt()
  orderIndex: number;
}

export class ReorderProgramsDto {
  @ApiProperty({ type: [ProgramOrderDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProgramOrderDto)
  programs: ProgramOrderDto[];
}
