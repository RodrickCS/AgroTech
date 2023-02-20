/*
  Warnings:

  - You are about to drop the `_motoristastoveiculos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idMotorista` to the `Veiculos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_motoristastoveiculos` DROP FOREIGN KEY `_MotoristasToVeiculos_A_fkey`;

-- DropForeignKey
ALTER TABLE `_motoristastoveiculos` DROP FOREIGN KEY `_MotoristasToVeiculos_B_fkey`;

-- AlterTable
ALTER TABLE `veiculos` ADD COLUMN `idMotorista` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_motoristastoveiculos`;

-- AddForeignKey
ALTER TABLE `Veiculos` ADD CONSTRAINT `Veiculos_idMotorista_fkey` FOREIGN KEY (`idMotorista`) REFERENCES `Motoristas`(`id_motorista`) ON DELETE RESTRICT ON UPDATE CASCADE;
