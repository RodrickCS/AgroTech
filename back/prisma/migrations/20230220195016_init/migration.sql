/*
  Warnings:

  - You are about to drop the column `tipo` on the `veiculos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `veiculos` DROP COLUMN `tipo`;

-- AddForeignKey
ALTER TABLE `Manutencoes` ADD CONSTRAINT `Manutencoes_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculos`(`id_veiculo`) ON DELETE RESTRICT ON UPDATE CASCADE;
