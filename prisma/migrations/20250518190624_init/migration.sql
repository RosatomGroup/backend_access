-- CreateTable
CREATE TABLE "access" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "action" VARCHAR(200) NOT NULL,
    "action_time" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "surname" VARCHAR(40) NOT NULL,
    "middle_name" VARCHAR(40) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "create_date" TIMESTAMP(6) NOT NULL,
    "complete_date" TIMESTAMP(6) NOT NULL,
    "resource_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resource" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255) NOT NULL,

    CONSTRAINT "resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resource_role" (
    "role_id" INTEGER NOT NULL,
    "resources_id" INTEGER NOT NULL,

    CONSTRAINT "resource_role_pkey" PRIMARY KEY ("role_id","resources_id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "access_id" INTEGER NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(40),
    "surname" VARCHAR(40),
    "middle_name" VARCHAR(40),
    "subdivision" VARCHAR(80),
    "rang" VARCHAR(80),
    "service_number" INTEGER,
    "role_id" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_request" (
    "user_id" INTEGER NOT NULL,
    "request_id" INTEGER NOT NULL,

    CONSTRAINT "user_request_pkey" PRIMARY KEY ("user_id","request_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "access_level_key" ON "access"("level");

-- CreateIndex
CREATE UNIQUE INDEX "role_name_key" ON "role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_service_number_key" ON "user"("service_number");

-- AddForeignKey
ALTER TABLE "log" ADD CONSTRAINT "log_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource_role" ADD CONSTRAINT "resource_role_resources_id_fkey" FOREIGN KEY ("resources_id") REFERENCES "resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource_role" ADD CONSTRAINT "resource_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_access_id_fkey" FOREIGN KEY ("access_id") REFERENCES "access"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_request" ADD CONSTRAINT "user_request_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_request" ADD CONSTRAINT "user_request_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
