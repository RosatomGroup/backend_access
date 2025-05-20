// prisma/seed.ts
import { PrismaClient } from './generated/client';
import { UserRole } from '../src/modules/auth/enums/user-role.enum';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // 1. Очистка данных в правильном порядке (избегаем нарушений foreign key)
  await prisma.user_request.deleteMany();
  await prisma.log.deleteMany();
  await prisma.user.deleteMany();
  await prisma.resource_role.deleteMany();
  await prisma.request.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.role.deleteMany();
  await prisma.access.deleteMany();

  // 2. Создаем уровни доступа (access)
  await prisma.access.createMany({
    data: [
      { id: 1, level: 1, description: 'Базовый доступ' },
      { id: 2, level: 2, description: 'Стандартный доступ' },
      { id: 3, level: 3, description: 'Расширенный доступ' },
      { id: 4, level: 4, description: 'Административный доступ' },
    ],
    skipDuplicates: true,
  });

  // 3. Создаем роли (role) - связываем с access
  await prisma.role.createMany({
    data: [
      {
        id: 1,
        name: 'Пользователь',
        description: 'Обычный пользователь',
        access_id: 1,
      },
      {
        id: 2,
        name: 'Администратор',
        description: 'Полные права доступа',
        access_id: 4,
      },
    ],
    skipDuplicates: true,
  });

  // 4. Создаем администратора (используем и enum, и связь с role)
  const adminEmail = 'admin@example.com';
  const adminPassword = await hash('Admin@123', 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      role_user: UserRole.ADMIN, // Используем enum
      role: { connect: { id: 2 } }, // Связываем с таблицей role
    },
    create: {
      email: adminEmail,
      password: adminPassword,
      name: 'Администратор',
      surname: 'Системы',
      role_user: UserRole.ADMIN, // Enum
      role: { connect: { id: 2 } }, // Связь с таблицей
      service_number: 1000,
      subdivision: 'Администрация',
    },
  });

  // 5. Создаем обычного пользователя
  const userEmail = 'user@example.com';
  const userPassword = await hash('User@123', 10);

  await prisma.user.upsert({
    where: { email: userEmail },
    update: {},
    create: {
      email: userEmail,
      password: userPassword,
      name: 'Иван',
      surname: 'Петров',
      role_user: UserRole.USER, // Enum
      role: { connect: { id: 1 } }, // Связь с таблицей
      service_number: 1001,
    },
  });

  console.log('✅ Seed data successfully created');
  console.log('🔑 Admin credentials:', adminEmail, 'Admin@123');
  console.log('👤 User credentials:', userEmail, 'User@123');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });