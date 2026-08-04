import { PrismaClient, Role } from '../generated/prisma';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as argon2 from 'argon2';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || '';
const url = new URL(databaseUrl);

const adapter = new PrismaMariaDb({
  host: url.hostname,
  port: parseInt(url.port || '3306', 10),
  user: url.username,
  password: url.password,
  database: url.pathname.slice(1),
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seed...');

  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'superadmin@example.com';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'SuperAdmin@123!';
  const adminName = process.env.SEED_ADMIN_NAME || 'Super Admin';

  // ─── Seed Super Admin ──────────────────────────────────────────────
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await argon2.hash(adminPassword, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 4,
    });

    const admin = await prisma.admin.create({
      data: {
        name: adminName,
        email: adminEmail,
        password: hashedPassword,
        role: Role.SUPER_ADMIN,
        isActive: true,
      },
    });

    console.log(`✅ Super Admin created: ${admin.email}`);
  } else {
    console.log(`ℹ️  Super Admin already exists: ${existingAdmin.email}`);
  }

  // ─── Seed Default Profile ──────────────────────────────────────────
  const profileCount = await prisma.profile.count();

  if (profileCount === 0) {
    await prisma.profile.create({
      data: {
        fullName: 'Your Name',
        headline: 'Full Stack Developer',
        bio: 'Welcome to my personal profile website.',
        email: adminEmail,
        skills: ['NestJS', 'TypeScript', 'React', 'MySQL'],
      },
    });
    console.log('✅ Default profile created');
  }

  // ─── Seed Default Aspiration Categories ───────────────────────────
  const aspirationCats = [
    { name: 'Saran', slug: 'saran' },
    { name: 'Pertanyaan', slug: 'pertanyaan' },
    { name: 'Kritik', slug: 'kritik' },
    { name: 'Lainnya', slug: 'lainnya' },
  ];

  for (const cat of aspirationCats) {
    await prisma.aspirationCategory.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log('✅ Aspiration categories seeded');

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
