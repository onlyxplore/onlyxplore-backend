// @ts-nocheck
import 'dotenv/config';
import { PrismaService } from '../src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaService();

async function main() {
  console.log('Seeding database...');
  const password = await bcrypt.hash('123123', 10);
  const now = new Date();

  const users = [
    {
      email: 'user@onlyxplore.in',
      name: 'Test Traveler',
      password,
      role: 'USER',
      emailVerified: now,
      image: 'https://i.pravatar.cc/150?u=user',
    },
    {
      email: 'gov@onlyxplore.in',
      name: 'Gov Admin',
      password,
      role: 'ADMIN',
      emailVerified: now,
      image: 'https://i.pravatar.cc/150?u=gov',
    },
    {
      email: 'host@onlyxplore.in',
      name: 'Host Creator',
      password,
      role: 'HOST',
      emailVerified: now,
      image: 'https://i.pravatar.cc/150?u=host',
    },
  ];

  for (const user of users) {
    const createdUser = await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user,
    });
    console.log(`Upserted user: ${createdUser.email} with role ${createdUser.role}`);

    if (createdUser.role === 'HOST') {
      await prisma.hostProfile.upsert({
        where: { userId: createdUser.id },
        update: {},
        create: {
          userId: createdUser.id,
          username: 'onlyxplore_host',
          firstName: 'Host',
          lastName: 'Creator',
          bio: 'Verified host on OnlyXplore',
          hostCategory: 'Agency',
          hostTypes: ['Guide', 'Agency'],
          experienceTypes: ['Adventure', 'Heritage'],
          primaryLocation: 'India',
        },
      });
      console.log('Upserted HostProfile for host user.');
    }
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
