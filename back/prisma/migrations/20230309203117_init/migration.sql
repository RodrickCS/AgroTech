-- CreateTable
CREATE TABLE `Funcionarios` (
    `id_funcionario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'Comum',
    `telefone` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Funcionarios_email_key`(`email`),
    UNIQUE INDEX `Funcionarios_telefone_key`(`telefone`),
    UNIQUE INDEX `Funcionarios_cpf_key`(`cpf`),
    PRIMARY KEY (`id_funcionario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Motoristas` (
    `id_motorista` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `cnh` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `disponivel` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Motoristas_telefone_key`(`telefone`),
    UNIQUE INDEX `Motoristas_cpf_key`(`cpf`),
    UNIQUE INDEX `Motoristas_cnh_key`(`cnh`),
    PRIMARY KEY (`id_motorista`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manutencoes` (
    `id_manutencao` INTEGER NOT NULL AUTO_INCREMENT,
    `id_veiculo` INTEGER NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_fim` DATETIME(3) NULL,
    `valor_gasto` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_manutencao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Frota` (
    `id_frota` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Frota_tipo_key`(`tipo`),
    PRIMARY KEY (`id_frota`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculos` (
    `id_veiculo` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `placa` VARCHAR(191) NOT NULL,
    `cor` VARCHAR(191) NOT NULL,
    `idMotorista` INTEGER NOT NULL,
    `disponivel` BOOLEAN NULL DEFAULT true,
    `idFrota` INTEGER NOT NULL,

    UNIQUE INDEX `Veiculos_placa_key`(`placa`),
    PRIMARY KEY (`id_veiculo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Viagens` (
    `id_viagem` INTEGER NOT NULL AUTO_INCREMENT,
    `id_veiculo` INTEGER NOT NULL,
    `id_motorista` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `hora_saida` DATETIME(3) NOT NULL,
    `hora_retorno` DATETIME(3) NULL,

    PRIMARY KEY (`id_viagem`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Manutencoes` ADD CONSTRAINT `Manutencoes_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculos`(`id_veiculo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculos` ADD CONSTRAINT `Veiculos_idMotorista_fkey` FOREIGN KEY (`idMotorista`) REFERENCES `Motoristas`(`id_motorista`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculos` ADD CONSTRAINT `Veiculos_idFrota_fkey` FOREIGN KEY (`idFrota`) REFERENCES `Frota`(`id_frota`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viagens` ADD CONSTRAINT `Viagens_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculos`(`id_veiculo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viagens` ADD CONSTRAINT `Viagens_id_motorista_fkey` FOREIGN KEY (`id_motorista`) REFERENCES `Motoristas`(`id_motorista`) ON DELETE RESTRICT ON UPDATE CASCADE;
