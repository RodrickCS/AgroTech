/*
  Warnings:

  - You are about to drop the column `modelo` on the `veiculos` table. All the data in the column will be lost.
  - Added the required column `marca` to the `Veiculos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `veiculos` DROP COLUMN `modelo`,
    ADD COLUMN `marca` VARCHAR(191) NOT NULL;
