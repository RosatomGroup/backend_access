import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Хеширование пароля
  const hashedPassword = await hash('defaultPassword123', 10);

  // Очистка всех таблиц (в правильном порядке из-за foreign keys)
  await prisma.user_request.deleteMany();
  await prisma.log.deleteMany();
  await prisma.user.deleteMany();
  await prisma.resource_role.deleteMany();
  await prisma.request.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.role.deleteMany();
  await prisma.access.deleteMany();

  // Создаем уровни доступа (access)
  const adminAccess = await prisma.access.create({
    data: {
      level: 1000,
      description: 'Full administrative access'
    }
  });

  const userAccess = await prisma.access.create({
    data: {
      level: 100,
      description: 'Standard user access'
    }
  });

  // Создаем роли (role)
  const adminRole = await prisma.role.create({
    data: {
      name: 'ADMIN',
      description: 'Administrator role',
      access_id: adminAccess.id
    }
  });

  const userRole = await prisma.role.create({
    data: {
      name: 'USER',
      description: 'Regular user role',
      access_id: userAccess.id
    }
  });

  // Создаем ресурсы (resource)
  const dashboardResource = await prisma.resource.create({
    data: {
      name: 'Dashboard',
      description: 'Main application dashboard'
    }
  });

  const settingsResource = await prisma.resource.create({
    data: {
      name: 'Settings',
      description: 'Application settings'
    }
  });

  // Связываем роли с ресурсами (resource_role)
  await prisma.resource_role.createMany({
    data: [
      {
        role_id: adminRole.id,
        resources_id: dashboardResource.id
      },
      {
        role_id: adminRole.id,
        resources_id: settingsResource.id
      },
      {
        role_id: userRole.id,
        resources_id: dashboardResource.id
      }
    ]
  });

  // Создаем пользователей (user)
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin',
      surname: 'System',
      service_number: 1001,
      role_id: adminRole.id
    }
  });

  const regularUser = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: hashedPassword,
      name: 'Regular',
      surname: 'User',
      service_number: 1002,
      role_id: userRole.id
    }
  });

  // Создаем запросы (request)
  const testRequest = await prisma.request.create({
    data: {
      status: 'PENDING',
      create_date: new Date(),
      complete_date: new Date(Date.now() + 86400000), // +1 день
      resource_id: dashboardResource.id
    }
  });

  // Связываем пользователей с запросами (user_request)
  await prisma.user_request.create({
    data: {
      user_id: adminUser.id,
      request_id: testRequest.id
    }
  });

  // Создаем логи (log)
  await prisma.log.create({
    data: {
      account_id: adminUser.id,
      action: 'User login',
      action_time: new Date()
    }
  });

  console.log('База данных успешно заполнена моковыми данными!');
  console.log(`Создана почта администратора: ${adminUser.email}`);
  console.log(`Создана почта пользователя: ${regularUser.email}`);
}

main()
  .catch(e => {
    console.error('Ошибка создания моковых данных:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });