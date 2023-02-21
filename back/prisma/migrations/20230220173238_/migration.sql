/*
  Warnings:

  - You are about to drop the column `idMotorista` on the `veiculos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `veiculos` DROP FOREIGN KEY `Veiculos_idMotorista_fkey`;

-- AlterTable
ALTER TABLE `veiculos` DROP COLUMN `idMotorista`;

-- CreateTable
CREATE TABLE `_MotoristasToVeiculos` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MotoristasToVeiculos_AB_unique`(`A`, `B`),
    INDEX `_MotoristasToVeiculos_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MotoristasToVeiculos` ADD CONSTRAINT `_MotoristasToVeiculos_A_fkey` FOREIGN KEY (`A`) REFERENCES `Motoristas`(`id_motorista`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MotoristasToVeiculos` ADD CONSTRAINT `_MotoristasToVeiculos_B_fkey` FOREIGN KEY (`B`) REFERENCES `Veiculos`(`id_veiculo`) ON DELETE CASCADE ON UPDATE CASCADE;