/*
  Warnings:

  - You are about to drop the column `access` on the `Request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "access";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "access" "AccessLevel" NOT NULL DEFAULT 'USER';
