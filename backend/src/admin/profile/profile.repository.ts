import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Profile, Prisma } from '../../../generated/prisma';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(): Promise<Profile | null> {
    return this.prisma.profile.findFirst();
  }

  async upsertProfile(data: UpdateProfileDto): Promise<Profile> {
    const existing = await this.getProfile();
    
    // Convert skills to Prisma Json format if present
    const dataToSave = {
      ...data,
      ...(data.skills !== undefined ? { skills: data.skills as Prisma.InputJsonValue } : {}),
    };

    if (existing) {
      return this.prisma.profile.update({
        where: { id: existing.id },
        data: dataToSave,
      });
    }

    return this.prisma.profile.create({
      data: {
        fullName: data.fullName || 'Admin', // default if not provided
        ...dataToSave,
      },
    });
  }

  async createActivityLog(data: {
    adminId: string;
    action: string;
    entity: string;
    entityId: string;
    description: string;
    metadata?: Record<string, unknown>;
  }): Promise<void> {
    const { adminId, metadata, ...rest } = data;
    await this.prisma.activityLog.create({
      data: {
        ...rest,
        ...(metadata ? { metadata: metadata as Prisma.InputJsonValue } : {}),
        admin: { connect: { id: adminId } },
      },
    });
  }
}
