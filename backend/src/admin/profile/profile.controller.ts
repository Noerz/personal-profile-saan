import {
  Controller,
  Get,
  Patch,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Public } from '../../common/decorators/public.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  /**
   * GET /profile
   * Public endpoint to get the profile data for the frontend
   */
  @Public()
  @Get()
  @ApiOperation({ summary: 'Get public profile', description: 'Retrieve the personal profile data for the public website' })
  @ApiResponse({ status: 200, description: 'Profile data retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Profile data not found' })
  getProfile() {
    return this.profileService.getProfile();
  }

  /**
   * PATCH /profile
   * Protected endpoint for admin to update profile data
   */
  @Patch()
  @ApiBearerAuth('JWT-Auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '[Admin] Update profile', description: 'Update personal profile data' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  updateProfile(
    @Body() dto: UpdateProfileDto,
    @CurrentUser('id') adminId: string,
  ) {
    return this.profileService.updateProfile(dto, adminId);
  }
}
