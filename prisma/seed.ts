// @ts-nocheck
import 'dotenv/config';
import { PrismaService } from '../src/prisma/prisma.service';
import { UserRole } from '../src/generated/prisma/enums';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaService();

async function main() {
  console.log('Seeding database...');
  const password = await bcrypt.hash('123123', 10);
  const now = new Date();

  const users = [
    {
      email: 'user@onlyxplore.in',
      name: 'Test User',
      password,
      role: UserRole.USER,
      emailVerified: now,
    },
    {
      email: 'admin@onlyxplore.in',
      name: 'Admin User',
      password,
      role: UserRole.ADMIN,
      emailVerified: now,
    },
    {
      email: 'host@onlyxplore.in',
      name: 'Host User',
      password,
      role: UserRole.HOST,
      emailVerified: now,
    },
  ];

  for (const user of users) {
    const createdUser = await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
    console.log(`Upserted user: ${createdUser.email} with role ${createdUser.role}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
