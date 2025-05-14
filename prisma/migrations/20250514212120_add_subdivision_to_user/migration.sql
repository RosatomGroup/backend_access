/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "subdivision" VARCHAR(40);

-- DropTable
DROP TABLE "Post";
