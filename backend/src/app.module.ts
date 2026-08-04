import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_GUARD, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

// Config
import appConfig from './config/app.config';
import jwtConfig from './config/jwt.config';
import storageConfig from './config/storage.config';
import { envValidationSchema } from './config/env.validation';

// Core modules
import { PrismaModule } from './prisma/prisma.module';

// Common
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { HttpExceptionFilter, AllExceptionsFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

// Feature modules (to be added as each module is implemented)
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './admin/users/users.module';
import { ProfileModule } from './admin/profile/profile.module';
import { CategoriesModule } from './categories/categories.module';
import { ArticlesModule } from './articles/articles.module';
import { FeaturedProgramsModule } from './featured-programs/programs.module';
import { AspirationsModule } from './aspirations/aspirations.module';
import { UploadModule } from './upload/upload.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ActivityLogModule } from './activity-log/activity-log.module';

@Module({
  imports: [
    // ─── Config ───────────────────────────────────────────────────────
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig, storageConfig],
      validationSchema: envValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),

    // ─── Rate Limiting ────────────────────────────────────────────────
    ThrottlerModule.forRootAsync({
      useFactory: () => ({
        throttlers: [
          {
            name: 'global',
            ttl: parseInt(process.env.THROTTLE_TTL || '60000', 10),
            limit: parseInt(process.env.THROTTLE_LIMIT || '100', 10),
          },
        ],
      }),
    }),

    // ─── Scheduler (for scheduled article publishing) ─────────────────
    ScheduleModule.forRoot(),

    // ─── Database ─────────────────────────────────────────────────────
    PrismaModule,

    // ─── Feature Modules ──────────────────────────────────────────────
    AuthModule,
    UsersModule,
    ProfileModule,
    CategoriesModule,
    ArticlesModule,
    FeaturedProgramsModule,
    AspirationsModule,
    UploadModule,
    DashboardModule,
    ActivityLogModule,
  ],

  providers: [
    // ─── Global Guards ────────────────────────────────────────────────
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },

    // ─── Global Filters ───────────────────────────────────────────────
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },

    // ─── Global Interceptors ──────────────────────────────────────────
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
