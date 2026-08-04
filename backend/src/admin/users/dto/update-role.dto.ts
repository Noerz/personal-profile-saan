import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { Role } from '../../../common/enums/role.enum';

export class UpdateRoleDto {
  @ApiProperty({
    enum: [Role.ADMIN, Role.EDITOR],
    description: 'New role for the admin (SUPER_ADMIN cannot be assigned here)',
  })
  @IsEnum([Role.ADMIN, Role.EDITOR], {
    message: 'Role must be either ADMIN or EDITOR. SUPER_ADMIN cannot be assigned via this endpoint.',
  })
  role: Role.ADMIN | Role.EDITOR;
}
