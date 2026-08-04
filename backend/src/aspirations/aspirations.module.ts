import { Module } from '@nestjs/common';
import { AspirationsController } from './aspirations.controller';
import { AspirationsService } from './aspirations.service';
import { AspirationsRepository } from './aspirations.repository';

@Module({
  controllers: [AspirationsController],
  providers: [AspirationsService, AspirationsRepository],
  exports: [AspirationsService],
})
export class AspirationsModule {}
