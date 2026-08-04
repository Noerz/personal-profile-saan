import * as Joi from 'joi';

/**
 * Joi validation schema for environment variables.
 * The application will fail to start if any required variable is missing or invalid.
 */
export const envValidationSchema = Joi.object({
  // Application
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().default(3001),
  API_PREFIX: Joi.string().default('api/v1'),
  APP_NAME: Joi.string().default('Personal Profile API'),

  // Database
  DATABASE_URL: Joi.string().required(),

  // JWT
  JWT_ACCESS_SECRET: Joi.string().min(32).required(),
  JWT_ACCESS_EXPIRES_IN: Joi.string().default('15m'),
  JWT_REFRESH_SECRET: Joi.string().min(32).required(),
  JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),

  // CORS
  ALLOWED_ORIGINS: Joi.string().required(),

  // Rate Limiting
  THROTTLE_TTL: Joi.number().default(60000),
  THROTTLE_LIMIT: Joi.number().default(100),
  THROTTLE_AUTH_TTL: Joi.number().default(60000),
  THROTTLE_AUTH_LIMIT: Joi.number().default(5),

  // File Upload
  UPLOAD_DIR: Joi.string().default('uploads'),
  MAX_FILE_SIZE_IMAGE: Joi.number().default(5242880),
  MAX_FILE_SIZE_DOCUMENT: Joi.number().default(10485760),

  // Seed
  SEED_ADMIN_NAME: Joi.string().default('Super Admin'),
  SEED_ADMIN_EMAIL: Joi.string().email().required(),
  SEED_ADMIN_PASSWORD: Joi.string().min(8).required(),

  // Email (optional)
  MAIL_HOST: Joi.string().optional(),
  MAIL_PORT: Joi.number().optional(),
  MAIL_SECURE: Joi.boolean().optional(),
  MAIL_USER: Joi.string().optional(),
  MAIL_PASS: Joi.string().optional(),
  MAIL_FROM: Joi.string().optional(),
  MAIL_DEV_MODE: Joi.boolean().default(true),
});
