import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ActivityLogService } from './activity-log.service';
import { QueryActivityLogDto } from './dto/query-activity-log.dto';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('Activity Logs')
@Controller('activity-logs')
@ApiBearerAuth('JWT-Auth')
@UseGuards(RolesGuard)
export class ActivityLogController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @ApiOperation({ summary: '[Super Admin/Admin] Get activity logs', description: 'List and filter activity logs' })
  @ApiResponse({ status: 200, description: 'Logs retrieved successfully' })
  findAll(@Query() query: QueryActivityLogDto) {
    return this.activityLogService.findAll(query);
  }
}
