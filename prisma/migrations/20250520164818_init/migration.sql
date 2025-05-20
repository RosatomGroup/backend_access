/*
  Warnings:

  - You are about to drop the column `owner` on the `resource` table. All the data in the column will be lost.
  - You are about to drop the column `resource_id` on the `role` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "log" DROP CONSTRAINT "log_account_id_fkey";

-- DropForeignKey
ALTER TABLE "role" DROP CONSTRAINT "role_resource_id_fkey";

-- DropForeignKey
ALTER TABLE "user_request" DROP CONSTRAINT "user_request_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_role_id_fkey";

-- AlterTable
ALTER TABLE "resource" DROP COLUMN "owner";

-- AlterTable
ALTER TABLE "role" DROP COLUMN "resource_id";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "resource_role" (
    "role_id" INTEGER NOT NULL,
    "resources_id" INTEGER NOT NULL,

    CONSTRAINT "resource_role_pkey" PRIMARY KEY ("role_id","resources_id")
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

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_service_number_key" ON "user"("service_number");

-- AddForeignKey
ALTER TABLE "log" ADD CONSTRAINT "log_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource_role" ADD CONSTRAINT "resource_role_resources_id_fkey" FOREIGN KEY ("resources_id") REFERENCES "resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource_role" ADD CONSTRAINT "resource_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_request" ADD CONSTRAINT "user_request_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
