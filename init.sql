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
    FOREIGN KEY (resource_id) REFERENCES resource (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE "user"
(
    id             SERIAL PRIMARY KEY,
    email          VARCHAR(255) NOT NULL UNIQUE,
    password       VARCHAR(100) NOT NULL,
    name           VARCHAR(40),
    surname        VARCHAR(40),
    middle_name    VARCHAR(40),
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