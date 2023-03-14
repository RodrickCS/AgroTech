-- DropForeignKey
ALTER TABLE `veiculos` DROP FOREIGN KEY `Veiculos_idFrota_fkey`;

-- DropForeignKey
ALTER TABLE `veiculos` DROP FOREIGN KEY `Veiculos_idMotorista_fkey`;

-- AlterTable
ALTER TABLE `motoristas` MODIFY `disponivel` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `veiculos` MODIFY `idMotorista` INTEGER NULL,
    MODIFY `idFrota` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Veiculos` ADD CONSTRAINT `Veiculos_idMotorista_fkey` FOREIGN KEY (`idMotorista`) REFERENCES `Motoristas`(`id_motorista`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculos` ADD CONSTRAINT `Veiculos_idFrota_fkey` FOREIGN KEY (`idFrota`) REFERENCES `Frota`(`id_frota`) ON DELETE SET NULL ON UPDATE CASCADE;
