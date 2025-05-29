import { PrismaService } from './prisma.service';

const prisma = new PrismaService();

async function main() {
  // Очистка данных (опционально, для повторных запусков)
  await prisma.notification.deleteMany();
  await prisma.log.deleteMany();
  await prisma.request.deleteMany();
  await prisma.role.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.user.deleteMany();
  await prisma.accessToken.deleteMany();
  await prisma.refreshToken.deleteMany();
  await prisma.passwordResetToken.deleteMany();
  await prisma.document.deleteMany();
  await prisma.video.deleteMany();

  // Пользователи
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: '$2a$10$E9x8Z7Qy2Vt7k3j6KdS4X.F6wz8oL9b5VjJxWJfYHdG1sN3cR5vD2',
      name: 'Admin',
      surname: 'User',
      accessLevel: 'ADMIN',
      avatarUrl: '/avatar.png',
      subdivision: 'IT Department',
      rang: 'Senior',
      serviceNumber: 1001,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: '$2a$10$E9x8Z7Qy2Vt7k3j6KdS4X.F6wz8oL9b5VjJxWJfYHdG1sN3cR5vD2',
      name: 'John',
      surname: 'Doe',
      middleName: 'Alexandrovich',
      accessLevel: 'USER',
      avatarUrl: '/avatar.png',
      subdivision: 'Finance',
      rang: 'Junior',
      serviceNumber: 1002,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: '$2a$10$E9x8Z7Qy2Vt7k3j6KdS4X.F6wz8oL9b5VjJxWJfYHdG1sN3cR5vD2',
      name: 'Jane',
      surname: 'Doe',
      middleName: 'Borisovna',
      accessLevel: 'USER',
      avatarUrl: '/avatar.png',
      subdivision: 'HR',
      rang: 'Middle',
      serviceNumber: 1003,
    },
  });

  // Ресурсы
  const resources = await prisma.resource.createMany({
    data: [
      {
        name: 'СУ ИТ',
        description: 'Система управления информационными технологиями',
        link: 'https://su-it.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'ЕОСДО 2.0',
        description: 'Единая отраслевая система документооборота',
        link: 'https://eosdo.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'КЦС «Цифровая наука»',
        description: 'Комплексная цифровая система для научных исследований',
        link: 'https://digital-science.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'ИС Сириус',
        description: 'Информационная система управления проектами',
        link: 'https://sirius.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'Рекорд 2.0',
        description: 'Система управления кадровыми процессами',
        link: 'https://record.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'МЛК',
        description: 'Мессенджер и корпоративные коммуникации',
        link: 'https://mlk.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'ИС ВДНМ',
        description: 'Информационная система витрины данных',
        link: 'https://vdnm.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'ИС СКД (REP900)',
        description: 'Система контроля договоров',
        link: 'https://skd.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'Цифровой ассистент',
        description: 'Виртуальный помощник для сотрудников',
        link: 'https://assistant.example.com',
        owner: 'Администратор системы',
      },
      {
        name: 'Защищенная корпоративная почтовая система (ЗКПС)',
        description: 'Безопасная почтовая система',
        link: 'https://mail.example.com',
        owner: 'Администратор системы',
      },
    ],
  });

  // Получаем ID ресурсов
  const allResources = await prisma.resource.findMany();
  const suIt = allResources.find((r) => r.name === 'СУ ИТ')!;
  const eosdo = allResources.find((r) => r.name === 'ЕОСДО 2.0')!;
  const digitalScience = allResources.find(
    (r) => r.name === 'КЦС «Цифровая наука»',
  )!;
  const sirius = allResources.find((r) => r.name === 'ИС Сириус')!;
  const record = allResources.find((r) => r.name === 'Рекорд 2.0')!;
  const mlk = allResources.find((r) => r.name === 'МЛК')!;
  const vdnm = allResources.find((r) => r.name === 'ИС ВДНМ')!;
  const skd = allResources.find((r) => r.name === 'ИС СКД (REP900)')!;
  const assistant = allResources.find((r) => r.name === 'Цифровой ассистент')!;
  const mail = allResources.find(
    (r) => r.name === 'Защищенная корпоративная почтовая система (ЗКПС)',
  )!;

  // Создаём роли для каждого ресурса (пример для первого ресурса, остальные аналогично)
  await prisma.role.createMany({
    data: [
      // СУ ИТ
      {
        name: 'Администратор СУ ИТ',
        description: 'Полный доступ ко всем функциям системы',
        resourceId: suIt.id,
      },
      {
        name: 'Аудитор СУ ИТ',
        description: 'Просмотр объектов в режиме только чтение',
        resourceId: suIt.id,
      },
      {
        name: 'Оператор СУ ИТ',
        description: 'Выполнение стандартных операций',
        resourceId: suIt.id,
      },
      {
        name: 'Аналитик СУ ИТ',
        description: 'Анализ данных и генерация отчетов',
        resourceId: suIt.id,
      },
      {
        name: 'Техподдержка СУ ИТ',
        description: 'Решение технических проблем пользователей',
        resourceId: suIt.id,
      },
      // ЕОСДО 2.0
      {
        name: 'Администратор ЕОСДО 2.0',
        description: 'Технологическая роль для настройки системы',
        resourceId: eosdo.id,
      },
      {
        name: 'Архивариус ЕОСДО 2.0',
        description: 'Управление документами и архивами',
        resourceId: eosdo.id,
      },
      {
        name: 'Бухгалтер ЕОСДО 2.0',
        description: 'Работа с финансовыми документами',
        resourceId: eosdo.id,
      },
      {
        name: 'Делопроизводитель ЕОСДО 2.0',
        description: 'Обработка входящих/исходящих документов',
        resourceId: eosdo.id,
      },
      {
        name: 'Руководитель ЕОСДО 2.0',
        description: 'Согласование и подписание документов',
        resourceId: eosdo.id,
      },
      // КЦС «Цифровая наука»
      {
        name: 'Администратор КЦС «Цифровая наука»',
        description: 'Полный доступ ко всем модулям системы',
        resourceId: digitalScience.id,
      },
      {
        name: 'Администратор базы НИОКР КЦС ЦН',
        description: 'Управление записями дивизионов и организаций',
        resourceId: digitalScience.id,
      },
      {
        name: 'Администратор МАО КЦС ЦН',
        description: 'Управление полномочиями и объектами',
        resourceId: digitalScience.id,
      },
      {
        name: 'Исследователь КЦС ЦН',
        description: 'Доступ к исследовательским инструментами',
        resourceId: digitalScience.id,
      },
      {
        name: 'Аналитик данных КЦС ЦН',
        description: 'Анализ научных данных',
        resourceId: digitalScience.id,
      },
      // ИС Сириус
      {
        name: 'Администратор инвестиционной стратегии ИС Сириус',
        description: 'Управление инвестиционными стратегиями',
        resourceId: sirius.id,
      },
      {
        name: 'Владелец направления ИС Сириус',
        description: 'Формулирование вызовов/проблем направления',
        resourceId: sirius.id,
      },
      {
        name: 'Директор проекта ИС Сириус',
        description: 'Руководство проектами',
        resourceId: sirius.id,
      },
      {
        name: 'Аналитик портфеля ИС Сириус',
        description: 'Анализ проектов портфеля',
        resourceId: sirius.id,
      },
      {
        name: 'Администратор базы знаний ИС Сириус',
        description: 'Управление базой извлеченных уроков',
        resourceId: sirius.id,
      },
      // Рекорд 2.0
      {
        name: 'Администратор РекордИН 2.0',
        description: 'Полный доступ к системе',
        resourceId: record.id,
      },
      {
        name: 'HR-специалист Рекорд 2.0',
        description: 'Управление кадровыми процессами',
        resourceId: record.id,
      },
      {
        name: 'Менеджер по подбору Рекорд 2.0',
        description: 'Работа с кандидатами',
        resourceId: record.id,
      },
      {
        name: 'Сотрудник Рекорд 2.0',
        description: 'Доступ к личному кабинету',
        resourceId: record.id,
      },
      {
        name: 'Отчетный аналитик Рекорд 2.0',
        description: 'Формирование кадровых отчетов',
        resourceId: record.id,
      },
      // МЛК
      {
        name: 'Администратор МЛК',
        description: 'Управление мессенджером',
        resourceId: mlk.id,
      },
      {
        name: 'Модератор МЛК',
        description: 'Контроль контента',
        resourceId: mlk.id,
      },
      {
        name: 'Разработчик интеграций МЛК',
        description: 'Настройка интеграций с другими системами',
        resourceId: mlk.id,
      },
      {
        name: 'Аналитик коммуникаций МЛК',
        description: 'Анализ активности пользователей',
        resourceId: mlk.id,
      },
      {
        name: 'Пользователь премиум МЛК',
        description: 'Расширенные функции общения',
        resourceId: mlk.id,
      },
      // ИС ВДНМ
      {
        name: 'Администратор витрины ИС ВДНМ',
        description: 'Управление витриной данных',
        resourceId: vdnm.id,
      },
      {
        name: 'Бизнес-аналитик ИС ВДНМ',
        description: 'Работа с бизнес-отчетами',
        resourceId: vdnm.id,
      },
      {
        name: 'Контролер данных ИС ВДНМ',
        description: 'Проверка качества данных',
        resourceId: vdnm.id,
      },
      {
        name: 'Дата-инженер ИС ВДНМ',
        description: 'Настройка ETL-процессов',
        resourceId: vdnm.id,
      },
      {
        name: 'Потребитель отчетов ИС ВДНМ',
        description: 'Просмотр готовых отчетов',
        resourceId: vdnm.id,
      },
      // ИС СКД (REP900)
      {
        name: 'Администратор договоров ИС СКД',
        description: 'Управление реестром договоров',
        resourceId: skd.id,
      },
      {
        name: 'Юрист ИС СКД',
        description: 'Проверка юридических аспектов',
        resourceId: skd.id,
      },
      {
        name: 'Менеджер контрактов ИС СКД',
        description: 'Контроль исполнения договоров',
        resourceId: skd.id,
      },
      {
        name: 'Финансовый контролер ИС СКД',
        description: 'Проверка финансовых условий',
        resourceId: skd.id,
      },
      {
        name: 'Архивариус договоров ИС СКД',
        description: 'Ведение архива договоров',
        resourceId: skd.id,
      },
      // Цифровой ассистент
      {
        name: 'Диалог-дизайнер Цифровой ассистент',
        description: 'Настройка сценариев диалогов',
        resourceId: assistant.id,
      },
      {
        name: 'Лингвист Цифровой ассистент',
        description: 'Обучение NLP-моделей',
        resourceId: assistant.id,
      },
      {
        name: 'Аналитик диалогов Цифровой ассистент',
        description: 'Анализ эффективности диалогов',
        resourceId: assistant.id,
      },
      {
        name: 'Инженер знаний Цифровой ассистент',
        description: 'Наполнение базы знаний',
        resourceId: assistant.id,
      },
      {
        name: 'Тестировщик Цифровой ассистент',
        description: 'Проверка работы ассистента',
        resourceId: assistant.id,
      },
      // ЗКПС
      {
        name: 'Администратор почты ЗКПС',
        description: 'Управление почтовой системой',
        resourceId: mail.id,
      },
      {
        name: 'Специалист безопасности ЗКПС',
        description: 'Контроль защищенной переписки',
        resourceId: mail.id,
      },
      {
        name: 'Технический специалист ЗКПС',
        description: 'Поддержка почтовых клиентов',
        resourceId: mail.id,
      },
      {
        name: 'Аналитик угроз ЗКПС',
        description: 'Мониторинг подозрительной активности',
        resourceId: mail.id,
      },
      {
        name: 'Пользователь с расширенными правами ЗКПС',
        description: 'Дополнительные функции почты',
        resourceId: mail.id,
      },
    ],
  });

  // Получаем все роли
  const roles = await prisma.role.findMany();

  // Заявки
  const request1 = await prisma.request.create({
    data: {
      name: 'John',
      surname: 'Doe',
      middleName: 'Alexandrovich',
      email: 'user1@example.com',
      status: 'PENDING',
      requestType: 'GRANT_ACCESS',
      resourceId: suIt.id,
      roleId: roles.find((r) => r.name === 'Администратор СУ ИТ')!.id,
      createDate: new Date(),
      users: { connect: [{ id: user1.id }] },
    },
  });

  const request2 = await prisma.request.create({
    data: {
      name: 'Jane',
      surname: 'Doe',
      middleName: 'Borisovna',
      email: 'user2@example.com',
      status: 'APPROVED',
      requestType: 'GRANT_ACCESS',
      resourceId: eosdo.id,
      roleId: roles.find((r) => r.name === 'Архивариус ЕОСДО 2.0')!.id,
      createDate: new Date(),
      users: { connect: [{ id: user2.id }] },
    },
  });

  const request3 = await prisma.request.create({
    data: {
      name: 'Admin',
      surname: 'User',
      middleName: 'Sergeevich',
      email: 'admin@example.com',
      status: 'APPROVED',
      requestType: 'GRANT_ACCESS',
      resourceId: digitalScience.id,
      roleId: roles.find(
        (r) => r.name === 'Администратор КЦС «Цифровая наука»',
      )!.id,
      createDate: new Date(),
      users: { connect: [{ id: admin.id }] },
    },
  });

  // Логи
  await prisma.log.createMany({
    data: [
      { accountId: user1.id, action: 'LOGIN', actionTime: new Date() },
      { accountId: user2.id, action: 'LOGIN', actionTime: new Date() },
      { accountId: admin.id, action: 'LOGIN', actionTime: new Date() },
      {
        accountId: user1.id,
        action: 'REQUEST_CREATED',
        actionTime: new Date(),
      },
      {
        accountId: user2.id,
        action: 'REQUEST_STATUS_UPDATED',
        actionTime: new Date(),
      },
    ],
  });

  // AccessToken & RefreshToken
  await prisma.accessToken.create({
    data: {
      token: 'access_token_1',
      userId: user1.id,
      expiresAt: new Date(Date.now() + 3600 * 1000),
    },
  });

  await prisma.refreshToken.create({
    data: {
      token: 'refresh_token_1',
      userId: user1.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 3600 * 1000),
    },
  });

  // Notification
  await prisma.notification.createMany({
    data: [
      {
        userId: user1.id,
        requestId: request1.id,
        status: 'PENDING',
        message:
          'Ваша заявка на предоставление доступа находится на рассмотрении',
        read: false,
      },
      {
        userId: user2.id,
        requestId: request2.id,
        status: 'APPROVED',
        message: 'Ваша заявка на предоставление доступа одобрена',
        read: false,
      },
      {
        userId: admin.id,
        requestId: request3.id,
        status: 'APPROVED',
        message: 'Ваша заявка на предоставление доступа одобрена',
        read: false,
      },
    ],
  });

  // Document
  await prisma.document.create({
    data: {
      filename: 'document_1.pdf',
      originalname: 'Документ 1.pdf',
      mimetype: 'application/pdf',
      size: 1024,
      url: '/uploads/documents/document_1.pdf',
    },
  });

  // Video
  await prisma.video.create({
    data: {
      originalname: 'Видео 1.mp4',
      filename: 'video_1.mp4',
      mimetype: 'video/mp4',
      size: 2048,
      url: '/uploads/videos/video_1.mp4',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
