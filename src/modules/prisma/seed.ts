import { PrismaService } from './prisma.service';

const prisma = new PrismaService();

async function main() {
  // Очистка данных
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
      password: '$2b$10$Mszg8mjxwX28d1heSmH5zeNUID.ymjlrgDgv2tOsPc.1K5G66FxA.',
      name: 'Admin',
      surname: 'User',
      accessLevel: 'ADMIN',
      avatarUrl: '/images/avatar.png',
      subdivision: 'IT Department',
      rang: 'Senior',
      serviceNumber: 1001,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: '$2b$10$Mszg8mjxwX28d1heSmH5zeNUID.ymjlrgDgv2tOsPc.1K5G66FxA.',
      name: 'John',
      surname: 'Doe',
      middleName: 'Alexandrovich',
      accessLevel: 'USER',
      avatarUrl: '/images/avatar.png',
      subdivision: 'Finance',
      rang: 'Junior',
      serviceNumber: 1002,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: '$2b$10$Mszg8mjxwX28d1heSmH5zeNUID.ymjlrgDgv2tOsPc.1K5G66FxA.',
      name: 'Jane',
      surname: 'Doe',
      middleName: 'Borisovna',
      accessLevel: 'USER',
      avatarUrl: '/images/avatar.png',
      subdivision: 'HR',
      rang: 'Middle',
      serviceNumber: 1003,
    },
  });

  // Дополнительные пользователи
  const user3 = await prisma.user.create({
    data: {
      email: 'user3@example.com',
      password: '$2b$10$Mszg8mjxwX28d1heSmH5zeNUID.ymjlrgDgv2tOsPc.1K5G66FxA.',
      name: 'Ivan',
      surname: 'Petrov',
      middleName: 'Sergeevich',
      accessLevel: 'USER',
      avatarUrl: '/avatar2.png',
      subdivision: 'Legal',
      rang: 'Middle',
      serviceNumber: 1004,
    },
  });

  const user4 = await prisma.user.create({
    data: {
      email: 'user4@example.com',
      password: '$2b$10$Mszg8mjxwX28d1heSmH5zeNUID.ymjlrgDgv2tOsPc.1K5G66FxA.',
      name: 'Olga',
      surname: 'Sidorova',
      middleName: 'Petrovna',
      accessLevel: 'USER',
      avatarUrl: '/avatar3.png',
      subdivision: 'IT Department',
      rang: 'Senior',
      serviceNumber: 1005,
    },
  });

  // Ресурсы
  await prisma.resource.createMany({
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
      // Дополнительные ресурсы
      {
        name: 'BI-платформа',
        description: 'Система аналитики',
        link: 'https://bi.example.com',
        owner: 'Администратор BI',
      },
      {
        name: 'Портал обучения',
        description: 'Платформа для корпоративного обучения',
        link: 'https://edu.example.com',
        owner: 'Администратор обучения',
      },
    ],
  });

  // Получаем ID ресурсов
  const allResources = await prisma.resource.findMany();
  const suIt = allResources.find((r) => r.name === 'СУ ИТ')!;
  const eosdo = allResources.find((r) => r.name === 'ЕОСДО 2.0')!;
  const digitalScience = allResources.find((r) => r.name === 'КЦС «Цифровая наука»')!;
  const sirius = allResources.find((r) => r.name === 'ИС Сириус')!;
  const record = allResources.find((r) => r.name === 'Рекорд 2.0')!;
  const mlk = allResources.find((r) => r.name === 'МЛК')!;
  const vdnm = allResources.find((r) => r.name === 'ИС ВДНМ')!;
  const skd = allResources.find((r) => r.name === 'ИС СКД (REP900)')!;
  const assistant = allResources.find((r) => r.name === 'Цифровой ассистент')!;
  const mail = allResources.find((r) => r.name === 'Защищенная корпоративная почтовая система (ЗКПС)')!;
  const bi = allResources.find((r) => r.name === 'BI-платформа')!;
  const edu = allResources.find((r) => r.name === 'Портал обучения')!;

  // Роли (добавьте еще из roles.json при необходимости)
  await prisma.role.createMany({
    data: [
      // СУ ИТ
      { name: 'Администратор СУ ИТ', description: 'Полный доступ ко всем функциям системы', resourceId: suIt.id },
      { name: 'Аудитор СУ ИТ', description: 'Просмотр объектов в режиме только чтение', resourceId: suIt.id },
      { name: 'Оператор СУ ИТ', description: 'Выполнение стандартных операций', resourceId: suIt.id },
      // BI-платформа
      { name: 'BI-аналитик', description: 'Анализ данных', resourceId: bi.id },
      // Портал обучения
      { name: 'Обучающийся', description: 'Доступ к материалам', resourceId: edu.id },
      // ЕОСДО 2.0
      { name: 'Архивариус ЕОСДО 2.0', description: 'Управление документами и архивами', resourceId: eosdo.id },
      // КЦС «Цифровая наука»
      { name: 'Администратор КЦС «Цифровая наука»', description: 'Полный доступ ко всем модулям системы', resourceId: digitalScience.id },
      // ... (добавьте остальные роли по аналогии)
    ],
  });

  // Пример добавления нескольких ролей из roles.json (ручная вставка для примера)
  await prisma.role.createMany({
    data: [
      {
        name: 'Админ отраслевого провайдера Корп_Академия редактирование (EDU - Обучение )',
        description: 'Администратор отраслевого провайдера с доступом на редактирование, с зоной ответственности на АНО Корпоративная академия',
        resourceId: record.id,
      },
      {
        name: 'Администратор АБЭ',
        description: 'Доступ к записям всех экспертов и экспертиз.',
        resourceId: digitalScience.id,
      },
      {
        name: 'Администратор инвестиционной стратегии ИС Сириус',
        description: 'Управление инвестиционными стратегиями',
        resourceId: sirius.id,
      },
      {
        name: 'Аудитор',
        description: 'Возможность просмотра объектов внутри системы в режиме "только чтение"',
        resourceId: suIt.id,
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
      roleId: roles.find((r) => r.name === 'Администратор КЦС «Цифровая наука»')!.id,
      createDate: new Date(),
      users: { connect: [{ id: admin.id }] },
    },
  });

  // Новые заявки
  const request4 = await prisma.request.create({
    data: {
      name: 'Ivan',
      surname: 'Petrov',
      middleName: 'Sergeevich',
      email: 'user3@example.com',
      status: 'PENDING',
      requestType: 'GRANT_ACCESS',
      resourceId: record.id,
      roleId: roles.find((r) => r.name === 'Админ отраслевого провайдера Корп_Академия редактирование (EDU - Обучение )')!.id,
      createDate: new Date(),
      users: { connect: [{ id: user3.id }] },
    },
  });

  // Логи
  await prisma.log.createMany({
    data: [
      { accountId: user1.id, action: 'LOGIN', actionTime: new Date() },
      { accountId: user2.id, action: 'LOGIN', actionTime: new Date() },
      { accountId: admin.id, action: 'LOGIN', actionTime: new Date() },
      { accountId: user1.id, action: 'REQUEST_CREATED', actionTime: new Date() },
      { accountId: user2.id, action: 'REQUEST_STATUS_UPDATED', actionTime: new Date() },
      { accountId: user3.id, action: 'LOGIN', actionTime: new Date() },
      { accountId: user3.id, action: 'REQUEST_CREATED', actionTime: new Date() },
      { accountId: user4.id, action: 'LOGIN', actionTime: new Date() },
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
  await prisma.accessToken.create({
    data: {
      token: 'access_token_2',
      userId: user3.id,
      expiresAt: new Date(Date.now() + 3600 * 1000),
    },
  });
  await prisma.refreshToken.create({
    data: {
      token: 'refresh_token_2',
      userId: user3.id,
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
        message: 'Ваша заявка на предоставление доступа находится на рассмотрении',
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
      {
        userId: user3.id,
        requestId: request4.id,
        status: 'PENDING',
        message: 'Ваша заявка на предоставление доступа находится на рассмотрении',
        read: false,
      },
    ],
  });

  // Documents
  await prisma.document.createMany({
    data: [
      {
        filename: 'Инструкция_администратора.pdf_1748959677000.pdf',
        originalname: 'Инструкция администратора.pdf',
        mimetype: 'application/pdf',
        size: 142568,
        url: 'https://rosatomaccess.storage.yandexcloud.net/Инструкция_администратора.pdf_1748959677000.pdf',
      },
      {
        filename: 'Инструкция_пользователя.pdf_1748686736911.pdf',
        originalname: 'Инструкция пользователя.pdf',
        mimetype: 'application/pdf',
        size: 190886,
        url: 'https://rosatomaccess.storage.yandexcloud.net/Инструкция_пользователя.pdf_1748686736911.pdf',
      },
      {
        filename: 'Описание_полного_функционала_системы.pdf_1748686832133.pdf',
        originalname: 'Описание полного функционала системы.pdf',
        mimetype: 'application/pdf',
        size: 139132,
        url: 'https://rosatomaccess.storage.yandexcloud.net/Описание_полного_функционала_системы.pdf_1748686832133.pdf',
      },
      {
        filename: 'Политика_безопасности.pdf',
        originalname: 'Политика безопасности.pdf',
        mimetype: 'application/pdf',
        size: 123456,
        url: 'https://storage.example.com/Политика_безопасности.pdf',
      },
    ],
  });

  // Video
  await prisma.video.create({
    data: {
      originalname: 'Обзор функционала системы.mov',
      filename: 'Обзор_функционала_системы.mov_1748687338308.mov',
      mimetype: 'video/quicktime',
      size: 20678624,
      url: 'https://rosatomaccess.storage.yandexcloud.net/Обзор_функционала_системы.mov_1748687338308.mov',
    },
  });
  await prisma.video.create({
    data: {
      originalname: 'Инструкция по безопасности.mp4',
      filename: 'Инструкция_по_безопасности.mp4',
      mimetype: 'video/mp4',
      size: 10485760,
      url: 'https://storage.example.com/Инструкция_по_безопасности.mp4',
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
