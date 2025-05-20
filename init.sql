-- CREATE TABLE access
-- (
--     id          SERIAL PRIMARY KEY,
--     level       INTEGER NOT NULL UNIQUE,
--     description VARCHAR(255)
-- );

-- CREATE TABLE resource
-- (
--     id          SERIAL PRIMARY KEY,
--     name        VARCHAR(100) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     link        VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE role
-- (
--     id          SERIAL PRIMARY KEY,
--     name        VARCHAR(100) NOT NULL UNIQUE,
--     description VARCHAR(255) NOT NULL,
--     access_id   INTEGER      NOT NULL,
--     FOREIGN KEY (access_id) REFERENCES access (id) ON UPDATE CASCADE ON DELETE RESTRICT
-- );

-- CREATE TABLE resource_role
-- (
--     role_id      INTEGER NOT NULL,
--     resources_id INTEGER NOT NULL,
--     PRIMARY KEY (role_id, resources_id),
--     FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE ON DELETE RESTRICT,
--     FOREIGN KEY (resources_id) REFERENCES resource (id) ON UPDATE CASCADE ON DELETE RESTRICT
-- );

-- CREATE TABLE request
-- (
--     id            SERIAL PRIMARY KEY,
--     name          VARCHAR(40)  NOT NULL,
--     surname       VARCHAR(40)  NOT NULL,
--     middle_name   VARCHAR(40)  NOT NULL,
--     email         VARCHAR(255) NOT NULL,
--     status        VARCHAR(255) NOT NULL,
--     request_type  VARCHAR(50)  NOT NULL,
--     create_date   TIMESTAMP    NOT NULL,
--     complete_date TIMESTAMP    NOT NULL,
--     resource_id   INTEGER      NOT NULL,
--     role_id       INTEGER      NOT NULL,
--     FOREIGN KEY (resource_id) REFERENCES resource (id) ON UPDATE CASCADE ON DELETE RESTRICT,
--     FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE ON DELETE RESTRICT
-- );

-- CREATE TABLE "user"
-- (
--     id             SERIAL PRIMARY KEY,
--     email          VARCHAR(255) NOT NULL UNIQUE,
--     password       VARCHAR(100) NOT NULL,
--     name           VARCHAR(40),
--     surname        VARCHAR(40),
--     middle_name    VARCHAR(40),
--     subdivision    VARCHAR(80),
--     rang           VARCHAR(80),
--     service_number INTEGER UNIQUE,
--     role_id        INTEGER,
--     FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE ON DELETE RESTRICT
-- );

-- CREATE TABLE user_request
-- (
--     user_id    INTEGER NOT NULL,
--     request_id INTEGER NOT NULL,
--     PRIMARY KEY (user_id, request_id),
--     FOREIGN KEY (user_id) REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE,
--     FOREIGN KEY (request_id) REFERENCES request (id) ON UPDATE CASCADE ON DELETE CASCADE
-- );


-- CREATE TABLE log
-- (
--     id          SERIAL PRIMARY KEY,
--     account_id  INTEGER      NOT NULL,
--     action      VARCHAR(200) NOT NULL,
--     action_time TIMESTAMP    NOT NULL,
--     FOREIGN KEY (account_id) REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE
-- );

-- Удаление существующих данных (для чистого старта, соблюдая порядок внешних ключей)
-- Удаляем таблицы-потомки в первую очередь
-- Удаление существующих данных (для чистого старта, соблюдая порядок внешних ключей)
-- Удаляем таблицы-потомки в первую очередь
DELETE FROM "user_request";
DELETE FROM "log";
DELETE FROM "request";
DELETE FROM "user";
DELETE FROM "role";
DELETE FROM "resource";
DELETE FROM "access";

-- Перезапуск последовательностей (для сброса ID в случае использования SERIAL)
-- Это важно, чтобы ID начинались с 1 при каждом запуске скрипта
-- Если ваши таблицы не используют SERIAL для ID, эти строки можно игнорировать или удалить
ALTER SEQUENCE IF EXISTS access_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS log_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS request_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS resource_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS role_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS user_id_seq RESTART WITH 1;


-- Уровни доступа
INSERT INTO access (id, level, description) VALUES
(1, 1, 'Read Only'),
(2, 2, 'Editor'),
(3, 3, 'Admin');

-- Ресурсы (системы)
INSERT INTO resource (id, name, description, link, owner) VALUES
(1, 'ЕОС 2.0', 'Единая отраслевая система', 'https://eos.example.com', 'Росатом'),
(2, 'СУ ИТ', 'Система управления ИТ', 'https://itsm.example.com', 'ИТ-отдел'),
(3, 'Рекорд 2.0', 'HR система', 'https://record.example.com', 'HR-отдел');

-- Роли
-- Убедитесь, что resource_id соответствует id из таблицы resource
INSERT INTO role (id, name, description, access_id, resource_id) VALUES
(1, 'Администратор', 'Полный доступ', 3, 1), -- Роль Администратор связана с resource 1 (ЕОС 2.0)
(2, 'Менеджер', 'Доступ к управлению', 2, 1),   -- Роль Менеджер связана с resource 1 (ЕОС 2.0)
(3, 'Аналитик', 'Только чтение', 1, 2);    -- Роль Аналитик связана с resource 2 (СУ ИТ)

-- Пользователи для тестирования
-- Пароль '$2b$10$oDLYxGADY1ZdGqweOZNfiuaC6L.BfUIuyNdP4l4i0vizX1yiURooO' соответствует "password123" (если вы генерировали его bcrypt)
INSERT INTO "user" (id, email, password, name, surname, middle_name, subdivision, rang, service_number, role_id) VALUES
  (1, 'admin@example.com', '$2b$10$oDLYxGADY1ZdGqweOZNfiuaC6L.BfUIuyNdP4l4i0vizX1yiURooO', 'Admin', 'System', NULL, 'IT', 'Administrator', 1001, 1),
  (2, 'user1@example.com', '$2b$10$oDLYxGADY1ZdGqweOZNfiuaC6L.BfUIuyNdP4l4i0vizX1yiURooO', 'Иван', 'Иванов', 'Иванович', 'Finance', 'Manager', 1002, 2),
  (3, 'user2@example.com', '$2b$10$oDLYxGADY1ZdGqweOZNfiuaC6L.BfUIuyNdP4l4i0vizX1yiURooO', 'Петр', 'Петров', NULL, 'HR', 'Specialist', 1003, 3);

-- Заявки
-- Для request с id=2, middle_name изменено с NULL на ''
INSERT INTO request (id, name, surname, middle_name, email, status, create_date, complete_date, resource_id, role_id, request_type) VALUES
  (1, 'Иванов', 'Иван', 'Иванович', 'ivan@example.com', 'pending', NOW(), '1970-01-01 00:00:00', 1, 1, 'grant_access'),
  (2, 'Петров', 'Петр', '', 'petr@example.com', 'approved', NOW() - INTERVAL '1 day', NOW(), 2, 2, 'revoke_access'); -- <-- Изменено NULL на ''

-- Привязка заявок к пользователям
INSERT INTO user_request (user_id, request_id) VALUES
  (2, 1), -- user1@example.com создал заявку #1
  (3, 2); -- user2@example.com создал заявку #2

-- Логи действий
-- account_id должен быть id пользователя из таблицы user
INSERT INTO log (id, account_id, action, action_time) VALUES
  (1, 2, 'Создал заявку #1', NOW()),
  (2, 3, 'Обновил статус заявки #2 на approved', NOW());