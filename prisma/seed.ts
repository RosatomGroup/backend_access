import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Удаляем старые данные (опционально)
  await prisma.request.deleteMany();
  await prisma.user.deleteMany();

  // Создаём пользователей
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: 'admin',
      name: 'Alice',
    //   posts: {
    //     create: [
    //       { title: 'First post', content: 'Hello, world!' },
    //       { title: 'Second post', content: 'Prisma is awesome!' },
    //     ],
    //   },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user@user.com',
      password: 'user',
      name: 'Bob',
    //   posts: {
    //     create: [
    //       { title: 'My thoughts', content: 'Just some random thoughts...' },
    //     ],
    //   },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });