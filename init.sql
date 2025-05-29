-- TRUNCATE statements (keep them if you want to reset data)
TRUNCATE TABLE "Request" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Role" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Resource" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Log" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "AccessToken" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "RefreshToken" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "PasswordResetToken" RESTART IDENTITY CASCADE;

-- Пользователи
INSERT INTO "User" (email, password, name, surname, "accessLevel") VALUES
  ('admin@example.com', '$2a$10$E9x8Z7Qy2Vt7k3j6KdS4X.F6wz8oL9b5VjJxWJfYHdG1sN3cR5vD2', 'Admin', 'User', 'ADMIN'),
  ('user1@example.com', '$2a$10$E9x8Z7Qy2Vt7k3j6KdS4X.F6wz8oL9b5VjJxWJfYHdG1sN3cR5vD2', 'John', 'Doe', 'USER'),
  ('user2@example.com', '$2a$10$E9x8Z7Qy2Vt7k3j6KdS4X.F6wz8oL9b5VjJxWJfYHdG1sN3cR5vD2', 'Jane', 'Doe', 'USER');

-- Ресурсы (системы)
INSERT INTO "Resource" (name, description, link, owner) VALUES
  ('СУ ИТ', 'Система управления информационными технологиями', 'https://su-it.example.com', 'Администратор системы'),
  ('ЕОСДО 2.0', 'Единая отраслевая система документооборота', 'https://eosdo.example.com', 'Администратор системы'),
  ('КЦС «Цифровая наука»', 'Комплексная цифровая система для научных исследований', 'https://digital-science.example.com', 'Администратор системы'),
  ('ИС Сириус', 'Информационная система управления проектами', 'https://sirius.example.com', 'Администратор системы'),
  ('Рекорд 2.0', 'Система управления кадровыми процессами', 'https://record.example.com', 'Администратор системы'),
  ('МЛК', 'Мессенджер и корпоративные коммуникации', 'https://mlk.example.com', 'Администратор системы'),
  ('ИС ВДНМ', 'Информационная система витрины данных', 'https://vdnm.example.com', 'Администратор системы'),
  ('ИС СКД (REP900)', 'Система контроля договоров', 'https://skd.example.com', 'Администратор системы'),
  ('Цифровой ассистент', 'Виртуальный помощник для сотрудников', 'https://assistant.example.com', 'Администратор системы'),
  ('Защищенная корпоративная почтовая система (ЗКПС)', 'Безопасная почтовая система', 'https://mail.example.com', 'Администратор системы');


-- Роли для СУ ИТ (resourceId: 1) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор СУ ИТ', 'Полный доступ ко всем функциям системы', 1),
  ('Аудитор СУ ИТ', 'Просмотр объектов в режиме только чтение', 1),
  ('Оператор СУ ИТ', 'Выполнение стандартных операций', 1),
  ('Аналитик СУ ИТ', 'Анализ данных и генерация отчетов', 1),
  ('Техподдержка СУ ИТ', 'Решение технических проблем пользователей', 1);

-- Роли для ЕОСДО 2.0 (resourceId: 2) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор ЕОСДО 2.0', 'Технологическая роль для настройки системы', 2),
  ('Архивариус ЕОСДО 2.0', 'Управление документами и архивами', 2),
  ('Бухгалтер ЕОСДО 2.0', 'Работа с финансовыми документами', 2),
  ('Делопроизводитель ЕОСДО 2.0', 'Обработка входящих/исходящих документов', 2),
  ('Руководитель ЕОСДО 2.0', 'Согласование и подписание документов', 2);

-- Роли для КЦС «Цифровая наука» (resourceId: 3) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор КЦС «Цифровая наука»', 'Полный доступ ко всем модулям системы', 3),
  ('Администратор базы НИОКР КЦС ЦН', 'Управление записями дивизионов и организаций', 3),
  ('Администратор МАО КЦС ЦН', 'Управление полномочиями и объектами', 3),
  ('Исследователь КЦС ЦН', 'Доступ к исследовательским инструментам', 3),
  ('Аналитик данных КЦС ЦН', 'Анализ научных данных', 3);

-- Роли для ИС Сириус (resourceId: 4) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор инвестиционной стратегии ИС Сириус', 'Управление инвестиционными стратегиями', 4),
  ('Владелец направления ИС Сириус', 'Формулирование вызовов/проблем направления', 4),
  ('Директор проекта ИС Сириус', 'Руководство проектами', 4),
  ('Аналитик портфеля ИС Сириус', 'Анализ проектов портфеля', 4),
  ('Администратор базы знаний ИС Сириус', 'Управление базой извлеченных уроков', 4);

-- Роли для Рекорд 2.0 (resourceId: 5) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор РекордИН 2.0', 'Полный доступ к системе', 5),
  ('HR-специалист Рекорд 2.0', 'Управление кадровыми процессами', 5),
  ('Менеджер по подбору Рекорд 2.0', 'Работа с кандидатами', 5),
  ('Сотрудник Рекорд 2.0', 'Доступ к личному кабинету', 5),
  ('Отчетный аналитик Рекорд 2.0', 'Формирование кадровых отчетов', 5);

-- Роли для МЛК (resourceId: 6) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор МЛК', 'Управление мессенджером', 6),
  ('Модератор МЛК', 'Контроль контента', 6),
  ('Разработчик интеграций МЛК', 'Настройка интеграций с другими системами', 6),
  ('Аналитик коммуникаций МЛК', 'Анализ активности пользователей', 6),
  ('Пользователь премиум МЛК', 'Расширенные функции общения', 6);

-- Роли для ИС ВДНМ (resourceId: 7) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор витрины ИС ВДНМ', 'Управление витриной данных', 7),
  ('Бизнес-аналитик ИС ВДНМ', 'Работа с бизнес-отчетами', 7),
  ('Контролер данных ИС ВДНМ', 'Проверка качества данных', 7),
  ('Дата-инженер ИС ВДНМ', 'Настройка ETL-процессов', 7),
  ('Потребитель отчетов ИС ВДНМ', 'Просмотр готовых отчетов', 7);

-- Роли для ИС СКД (REP900) (resourceId: 8) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор договоров ИС СКД', 'Управление реестром договоров', 8),
  ('Юрист ИС СКД', 'Проверка юридических аспектов', 8),
  ('Менеджер контрактов ИС СКД', 'Контроль исполнения договоров', 8),
  ('Финансовый контролер ИС СКД', 'Проверка финансовых условий', 8),
  ('Архивариус договоров ИС СКД', 'Ведение архива договоров', 8);

-- Роли для Цифровой ассистент (resourceId: 9) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Диалог-дизайнер Цифровой ассистент', 'Настройка сценариев диалогов', 9),
  ('Лингвист Цифровой ассистент', 'Обучение NLP-моделей', 9),
  ('Аналитик диалогов Цифровой ассистент', 'Анализ эффективности диалогов', 9),
  ('Инженер знаний Цифровой ассистент', 'Наполнение базы знаний', 9),
  ('Тестировщик Цифровой ассистент', 'Проверка работы ассистента', 9);

-- Роли для ЗКПС (resourceId: 10) - Modified names to be unique
INSERT INTO "Role" (name, description, "resourceId") VALUES
  ('Администратор почты ЗКПС', 'Управление почтовой системой', 10),
  ('Специалист безопасности ЗКПС', 'Контроль защищенной переписки', 10),
  ('Технический специалист ЗКПС', 'Поддержка почтовых клиентов', 10),
  ('Аналитик угроз ЗКПС', 'Мониторинг подозрительной активности', 10),
  ('Пользователь с расширенными правами ЗКПС', 'Дополнительные функции почты', 10);

-- Заявки
INSERT INTO "Request" (name, surname, "middleName", email, status, "requestType", "resourceId", "roleId", "createDate") VALUES
  ('John', 'Doe', 'Alexandrovich', 'user1@example.com', 'PENDING', 'GRANT_ACCESS', 1, 1, NOW()),
  ('Jane', 'Doe', 'Borisovna', 'user2@example.com', 'APPROVED', 'GRANT_ACCESS', 2, 6, NOW()),
  ('Admin', 'User', 'Sergeevich', 'admin@example.com', 'APPROVED', 'GRANT_ACCESS', 3, 11, NOW());

-- Связь пользователей с заявками
INSERT INTO "_RequestToUser" ("A", "B") VALUES
  (1, (SELECT id FROM "User" WHERE email = 'user1@example.com')),
  (2, (SELECT id FROM "User" WHERE email = 'user2@example.com')),
  (3, (SELECT id FROM "User" WHERE email = 'admin@example.com'));