CREATE TABLE access
(
    id          SERIAL PRIMARY KEY,
    level       INTEGER NOT NULL UNIQUE,
    description VARCHAR(255)
);

CREATE TABLE resource
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE role
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL,
    access_id   INTEGER      NOT NULL,
    FOREIGN KEY (access_id) REFERENCES access (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE resource_role
(
    role_id      INTEGER NOT NULL,
    resources_id INTEGER NOT NULL,
    PRIMARY KEY (role_id, resources_id),
    FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (resources_id) REFERENCES resource (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE request
(
    id            SERIAL PRIMARY KEY,
    status        VARCHAR(255) NOT NULL,
    create_date   TIMESTAMP    NOT NULL,
    complete_date TIMESTAMP    NOT NULL,
    resource_id   INTEGER      NOT NULL,
    role_id       INTEGER      NOT NULL,
    FOREIGN KEY (resource_id) REFERENCES resource (id) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

-- ALTER TABLE request ADD COLUMN request_type VARCHAR(50) NOT NULL;
DROP TABLE request;
CREATE TABLE request
(
    id            SERIAL PRIMARY KEY,
    status        VARCHAR(50) NOT NULL,
    request_type  VARCHAR(50) NOT NULL,
    create_date   TIMESTAMP    NOT NULL,
    complete_date TIMESTAMP,
    resource_id   INTEGER      NOT NULL,
    role_id       INTEGER,
    FOREIGN KEY (resource_id) REFERENCES resource (id) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE "user"
(
    id             SERIAL PRIMARY KEY,
    email          VARCHAR(255) NOT NULL UNIQUE,
    password       VARCHAR(100) NOT NULL,
    name           VARCHAR(40),
    surname        VARCHAR(40),
    middle_name    VARCHAR(40),
    subdivision    VARCHAR(80),
    service_number INTEGER UNIQUE,
    role_id        INTEGER,
    FOREIGN KEY (role_id) REFERENCES role (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE user_request
(
    user_id    INTEGER NOT NULL,
    request_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, request_id),
    FOREIGN KEY (user_id) REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (request_id) REFERENCES request (id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE log
(
    id          SERIAL PRIMARY KEY,
    account_id  INTEGER      NOT NULL,
    action      VARCHAR(200) NOT NULL,
    action_time TIMESTAMP    NOT NULL,
    FOREIGN KEY (account_id) REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Уровни доступа
INSERT INTO access (level, description) VALUES 
(1, 'Административный доступ'),
(2, 'Расширенные права'),
(3, 'Стандартные права'),
(4, 'Ограниченные права');

-- Ресурсы (системы)
INSERT INTO resource (name, description) VALUES 
('СУ ИТ', 'Система управления ИТ'),
('Рекорд 2.0', 'Система кадрового учета'),
('ЕОСДО 2.0', 'Единая отраслевая система документооборота'),
('ЕОС НСИ', 'Единая отраслевая система нормативно-справочной информации'),
('АРИДА', 'Автоматизированная система управления');

-- Роли
INSERT INTO role (name, description, access_id) VALUES 
('Администратор', 'Полный доступ к системе', 1),
('Менеджер', 'Доступ к управлению пользователями', 2),
('Пользователь', 'Стандартные права пользователя', 3),
('Гость', 'Ограниченные права доступа', 4),
('Аналитик', 'Доступ к аналитическим отчетам', 2),
('Редактор', 'Доступ к редактированию контента', 3);

-- Связи ролей с ресурсами
INSERT INTO resource_role (role_id, resources_id) VALUES 
(1, 1), -- Администратор СУ ИТ
(2, 1), -- Менеджер СУ ИТ
(3, 1), -- Пользователь СУ ИТ
(1, 2), -- Администратор Рекорд 2.0
(2, 2), -- Менеджер Рекорд 2.0
(3, 2), -- Пользователь Рекорд 2.0
(1, 3), -- Администратор ЕОСДО 2.0
(3, 3), -- Пользователь ЕОСДО 2.0
(1, 4), -- Администратор ЕОС НСИ
(5, 4), -- Аналитик ЕОС НСИ
(1, 5), -- Администратор АРИДА
(6, 5); -- Редактор АРИДА