/*
  Warnings:

  - You are about to drop the column `idVeiculo` on the `motoristas` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Funcionarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Motoristas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `motoristas` DROP FOREIGN KEY `Motoristas_idVeiculo_fkey`;

-- AlterTable
ALTER TABLE `motoristas` DROP COLUMN `idVeiculo`;

-- CreateTable
CREATE TABLE `_MotoristasToVeiculos` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MotoristasToVeiculos_AB_unique`(`A`, `B`),
    INDEX `_MotoristasToVeiculos_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Funcionarios_cpf_key` ON `Funcionarios`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Motoristas_cpf_key` ON `Motoristas`(`cpf`);

-- AddForeignKey
ALTER TABLE `_MotoristasToVeiculos` ADD CONSTRAINT `_MotoristasToVeiculos_A_fkey` FOREIGN KEY (`A`) REFERENCES `Motoristas`(`id_motorista`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MotoristasToVeiculos` ADD CONSTRAINT `_MotoristasToVeiculos_B_fkey` FOREIGN KEY (`B`) REFERENCES `Veiculos`(`id_veiculo`) ON DELETE CASCADE ON UPDATE CASCADE;
