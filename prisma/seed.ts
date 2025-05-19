import { PrismaClient } from '../prisma/generated/client'
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Очистка данных в правильном порядке (с учетом foreign key constraints)
  await prisma.user_request.deleteMany();
  await prisma.log.deleteMany();
  await prisma.user.deleteMany();
  await prisma.resource_role.deleteMany();
  await prisma.request.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.role.deleteMany();
  await prisma.access.deleteMany();

  const accessLevels = await prisma.access.createMany({
    data: [
      { level: 1, description: 'Базовый доступ' },
      { level: 2, description: 'Стандартный доступ' },
      { level: 3, description: 'Расширенный доступ' },
      { level: 4, description: 'Административный доступ' },
      { level: 5, description: 'Супер-администратор' },
    ],
    skipDuplicates: true,
  });

  // Создаем роли
  const roles = await prisma.role.createMany({
    data: [
      { name: 'Пользователь', description: 'Обычный пользователь', access_id: 1 },
      { name: 'Редактор', description: 'Редактор контента', access_id: 2 },
      { name: 'Модератор', description: 'Модератор системы', access_id: 3 },
      { name: 'Администратор', description: 'Администратор системы', access_id: 4 },
      { name: 'Супер-админ', description: 'Полный доступ', access_id: 5 },
    ],
    skipDuplicates: true,
  });

  // Создаем ресурсы
  const resources = await prisma.resource.createMany({
    data: [
      { name: 'Главная страница', description: 'Основная страница портала', link: '123' },
      { name: 'Панель управления', description: 'Админ панель', link: "123" },
      { name: 'База знаний', description: 'Хранилище документов', link: "123" },
      { name: 'Отчеты', description: 'Генерация отчетов', link: "123" },
      { name: 'Настройки', description: 'Системные настройки', link: "123" },
    ],
    skipDuplicates: true,
  });

  // const resources = await prisma.resource.createMany({
  //   data: [
  //     { name: 'Главная страница', description: 'Основная страница портала', link: "123"},
  //     { name: 'Панель управления', description: 'Админ панель' },
  //     { name: 'База знаний', description: 'Хранилище документов' },
  //     { name: 'Отчеты', description: 'Генерация отчетов' },
  //     { name: 'Настройки', description: 'Системные настройки' },
  //   ],
  //   skipDuplicates: true,
  // });

  // Создаем связи между ресурсами и ролями
  const resourceRoles = await Promise.all([
    prisma.resource_role.create({
      data: {
        role_id: 1,
        resources_id: 1,
      },
    }),
    prisma.resource_role.create({
      data: {
        role_id: 2,
        resources_id: 3,
      },
    }),
    prisma.resource_role.create({
      data: {
        role_id: 3,
        resources_id: 4,
      },
    }),
    prisma.resource_role.create({
      data: {
        role_id: 4,
        resources_id: 2,
      },
    }),
    prisma.resource_role.create({
      data: {
        role_id: 5,
        resources_id: 5,
      },
    }),
  ]);

  // Создаем пользователей
  const users = await prisma.user.createMany({
    data: [
      {
        email: 'user1@example.com',
        password: 'hashed_password_1',
        name: 'Иван',
        surname: 'Иванов',
        middle_name: 'Иванович',
        subdivision: 'Отдел разработки',
        // rang: 'Разработчик',
        service_number: 1001,
        role_id: 1,
      },
      {
        email: 'user2@example.com',
        password: 'hashed_password_2',
        name: 'Петр',
        surname: 'Петров',
        middle_name: 'Петрович',
        subdivision: 'Отдел тестирования',
        // rang: 'Тестировщик',
        service_number: 1002,
        role_id: 2,
      },
      {
        email: 'user3@example.com',
        password: 'hashed_password_3',
        name: 'Сергей',
        surname: 'Сергеев',
        middle_name: 'Сергеевич',
        subdivision: 'Отдел аналитики',
        // rang: 'Аналитик',
        service_number: 1003,
        role_id: 3,
      },
      {
        email: 'user4@example.com',
        password: 'hashed_password_4',
        name: 'Анна',
        surname: 'Аннова',
        middle_name: 'Анновна',
        subdivision: 'Отдел поддержки',
        // rang: 'Менеджер',
        service_number: 1004,
        role_id: 4,
      },
      {
        email: 'user5@example.com',
        password: 'hashed_password_5',
        name: 'Мария',
        surname: 'Марьина',
        middle_name: 'Марьевна',
        subdivision: 'Администрация',
        // rang: 'Директор',
        service_number: 1005,
        role_id: 5,
      },
    ],
    skipDuplicates: true,
  });

  // Создаем логи
  const logs = await prisma.log.createMany({
    data: [
      { account_id: 1, action: 'Вход в систему', action_time: new Date() },
      { account_id: 2, action: 'Создание документа', action_time: new Date() },
      { account_id: 3, action: 'Просмотр отчета', action_time: new Date() },
      { account_id: 4, action: 'Изменение настроек', action_time: new Date() },
      { account_id: 5, action: 'Управление пользователями', action_time: new Date() },
    ],
    skipDuplicates: true,
  });

  // Создаем запросы
  const requests = await prisma.request.createMany({
    data: [
      {
        name: 'Алексей',
        surname: 'Алексеев',
        middle_name: 'Алексеевич',
        email: 'alex@example.com',
        status: 'Новый',
        create_date: new Date(),
        complete_date: new Date(Date.now() + 86400000),
        resource_id: 1,
        role_id: 1,
      },
      {
        name: 'Дмитрий',
        surname: 'Дмитриев',
        middle_name: 'Дмитриевич',
        email: 'dmitry@example.com',
        status: 'В обработке',
        create_date: new Date(),
        complete_date: new Date(Date.now() + 172800000),
        resource_id: 2,
        role_id: 2,
      },
      {
        name: 'Елена',
        surname: 'Еленова',
        middle_name: 'Еленовна',
        email: 'elena@example.com',
        status: 'Выполнен',
        create_date: new Date(Date.now() - 86400000),
        complete_date: new Date(),
        resource_id: 3,
        role_id: 3,
      },
      {
        name: 'Ольга',
        surname: 'Ольгова',
        middle_name: 'Ольговна',
        email: 'olga@example.com',
        status: 'Отклонен',
        create_date: new Date(Date.now() - 172800000),
        complete_date: new Date(Date.now() - 86400000),
        resource_id: 4,
        role_id: 4,
      },
      {
        name: 'Николай',
        surname: 'Николаев',
        middle_name: 'Николаевич',
        email: 'nikolay@example.com',
        status: 'Новый',
        create_date: new Date(),
        complete_date: new Date(Date.now() + 259200000),
        resource_id: 5,
        role_id: 5,
      },
      {
        name: 'Светлана',
        surname: 'Светлова',
        middle_name: 'Светловна',
        email: 'svetlana@example.com',
        status: 'В обработке',
        create_date: new Date(),
        complete_date: new Date(Date.now() + 345600000),
        resource_id: 1,
        role_id: 2,
      },
      {
        name: 'Виктор',
        surname: 'Викторов',
        middle_name: 'Викторович',
        email: 'viktor@example.com',
        status: 'Выполнен',
        create_date: new Date(Date.now() - 259200000),
        complete_date: new Date(Date.now() - 86400000),
        resource_id: 2,
        role_id: 3,
      },
      {
        name: 'Татьяна',
        surname: 'Татьянова',
        middle_name: 'Татьяновна',
        email: 'tatyana@example.com',
        status: 'Отклонен',
        create_date: new Date(Date.now() - 345600000),
        complete_date: new Date(Date.now() - 172800000),
        resource_id: 3,
        role_id: 4,
      },
      {
        name: 'Михаил',
        surname: 'Михайлов',
        middle_name: 'Михайлович',
        email: 'mikhail@example.com',
        status: 'Новый',
        create_date: new Date(),
        complete_date: new Date(Date.now() + 432000000),
        resource_id: 4,
        role_id: 5,
      },
      {
        name: 'Анастасия',
        surname: 'Анастасова',
        middle_name: 'Анастасовна',
        email: 'anastasia@example.com',
        status: 'В обработке',
        create_date: new Date(),
        complete_date: new Date(Date.now() + 518400000),
        resource_id: 5,
        role_id: 1,
      },
    ],
    skipDuplicates: true,
  });

  // Создаем связи пользователей с запросами
  const userRequests = await Promise.all([
    prisma.user_request.create({
      data: {
        user_id: 1,
        request_id: 1,
      },
    }),
    prisma.user_request.create({
      data: {
        user_id: 2,
        request_id: 2,
      },
    }),
    prisma.user_request.create({
      data: {
        user_id: 3,
        request_id: 3,
      },
    }),
    prisma.user_request.create({
      data: {
        user_id: 4,
        request_id: 4,
      },
    }),
    prisma.user_request.create({
      data: {
        user_id: 5,
        request_id: 5,
      },
    }),
  ]);

  console.log('Наполнение базы данных успешно завершено!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });