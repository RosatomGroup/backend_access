/*
  Warnings:

  - Added the required column `request_type` to the `request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "request" ADD COLUMN     "request_type" VARCHAR(50) NOT NULL;
