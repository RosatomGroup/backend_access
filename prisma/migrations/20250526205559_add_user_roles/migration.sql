-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "access" "AccessLevel" NOT NULL DEFAULT 'USER';
