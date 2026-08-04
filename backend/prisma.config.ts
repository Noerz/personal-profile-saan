import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

/**
 * Prisma v7 Configuration File.
 * Used by Prisma CLI for migrations, db push, and other CLI commands.
 * The runtime connection is handled separately in PrismaService via the driver adapter.
 */
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
