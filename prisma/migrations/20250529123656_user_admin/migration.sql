-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('ADMIN', 'USER');

-- AlterEnum
ALTER TYPE "LogAction" ADD VALUE 'REQUEST_STATUS_UPDATE';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL DEFAULT 'USER',
ADD COLUMN     "avatarUrl" TEXT DEFAULT '/avatar.png';
