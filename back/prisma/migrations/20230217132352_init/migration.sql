/*
  Warnings:

  - Added the required column `email` to the `Funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Funcionarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funcionarios` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `senha` VARCHAR(191) NOT NULL;
