import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  // Serve static files from 'uploads' directory
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') || 3001;
  const apiPrefix = configService.get<string>('app.apiPrefix') || 'api/v1';
  const appName = configService.get<string>('app.name') || 'Personal Profile API';
  const allowedOrigins = configService.get<string[]>('app.allowedOrigins') || [];
  const nodeEnv = configService.get<string>('app.nodeEnv') || 'development';

  // ─── Security: Helmet ─────────────────────────────────────────────
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: nodeEnv === 'production',
    }),
  );

  // ─── CORS ─────────────────────────────────────────────────────────
  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS: Origin ${origin} not allowed`));
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['X-Request-ID', 'X-Total-Count'],
  });

  // ─── Global API Prefix ────────────────────────────────────────────
  app.setGlobalPrefix(apiPrefix);

  // ─── Global Validation Pipe ───────────────────────────────────────
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // Strip unknown properties
      forbidNonWhitelisted: true,   // Throw on unknown properties
      transform: true,              // Auto-transform DTOs to class instances
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // ─── Swagger Documentation ────────────────────────────────────────
  if (nodeEnv !== 'production') {
    const config = new DocumentBuilder()
      .setTitle(appName)
      .setDescription(
        `REST API Documentation for ${appName}\n\n` +
        '**Authentication**: Use the Authorize button with your JWT Access Token.\n\n' +
        '**Format**: Bearer <your_access_token>',
      )
      .setVersion('1.0')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
          description: 'Enter your JWT access token',
          in: 'header',
        },
        'JWT-Auth',
      )
      .addTag('Auth', 'Authentication & Authorization')
      .addTag('Admin - Users', 'Admin account management (Super Admin only)')
      .addTag('Admin - Profile', 'Public profile management')
      .addTag('Admin - Articles', 'Article management')
      .addTag('Admin - Categories', 'Category management')
      .addTag('Admin - Programs', 'Featured programs management')
      .addTag('Admin - Aspirations', 'Aspiration management')
      .addTag('Admin - Upload', 'File upload management')
      .addTag('Admin - Dashboard', 'Dashboard statistics')
      .addTag('Admin - Activity Log', 'Activity audit logs')
      .addTag('Public - Profile', 'Public profile data')
      .addTag('Public - Articles', 'Public article data')
      .addTag('Public - Categories', 'Public category data')
      .addTag('Public - Programs', 'Public program data')
      .addTag('Public - Aspirations', 'Aspiration submission')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
    });

    logger.log(`📖 Swagger docs available at: http://localhost:${port}/api/docs`);
  }

  // ─── Static Files for Uploads ─────────────────────────────────────
  // Serve the uploads folder as static files
  const expressApp = app.getHttpAdapter().getInstance() as import('express').Application;
  expressApp.use('/uploads', require('express').static('uploads'));

  // ─── Start Server ─────────────────────────────────────────────────
  await app.listen(port);

  logger.log(`🚀 Application running on: http://localhost:${port}`);
  logger.log(`🌐 API prefix: /${apiPrefix}`);
  logger.log(`🔧 Environment: ${nodeEnv}`);
}

bootstrap();
