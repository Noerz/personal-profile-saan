import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from '../../../generated/prisma';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getProfile(): Promise<Profile> {
    const profile = await this.profileRepository.getProfile();
    if (!profile) {
      // In a real scenario, we might want to just return an empty object or a default profile.
      // But since our seeder creates one, we'll throw 404 if it's missing (e.g. accidentally deleted).
      throw new NotFoundException('Profile data not found. Please run database seed.');
    }
    return profile;
  }

  async updateProfile(dto: UpdateProfileDto, adminId: string): Promise<Profile> {
    const updated = await this.profileRepository.upsertProfile(dto);

    await this.profileRepository.createActivityLog({
      adminId,
      action: 'UPDATE_PROFILE',
      entity: 'Profile',
      entityId: updated.id,
      description: 'Public profile information was updated',
      metadata: { fields: Object.keys(dto) },
    });

    return updated;
  }
}
