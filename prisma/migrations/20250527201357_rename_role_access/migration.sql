/*
  Warnings:

  - You are about to drop the column `access` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "access",
ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL DEFAULT 'USER';
