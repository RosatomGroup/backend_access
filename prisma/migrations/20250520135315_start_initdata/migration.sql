/*
  Warnings:

  - You are about to drop the `resource_role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `owner` to the `resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resource_id` to the `role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "resource_role" DROP CONSTRAINT "resource_role_resources_id_fkey";

-- DropForeignKey
ALTER TABLE "resource_role" DROP CONSTRAINT "resource_role_role_id_fkey";

-- AlterTable
ALTER TABLE "resource" ADD COLUMN     "owner" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "role" ADD COLUMN     "resource_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "resource_role";

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
