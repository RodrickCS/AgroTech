const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 5) {
      let veiculo = await prisma.veiculos.create({
        data: req.body,
      });
      res.status(201).json(veiculo).end();
    } else {
      res.status(400).json({ msg: "Formulário inválido, campos faltando" }).end();
    }
  } catch (err) {
    if (err.code === "P2003") {
      res
        .status(400)
        .json([
          { msg: "Veículo não existe verifique o id" },
          { erro: err },
        ])
        .end();
    } else {
      res.status(500).json(err).end();
      console.log(err);
    }
  }
};

const readAll = async (req, res) => {
  try {
    let veiculo = await prisma.veiculos.findMany({
      select: {
        id_veiculo: true,
        idFrota: true,
        marca: true,
        placa: true,
        cor: true,
        disponivel: true,
        motorista: true,
        manutencoes: true,
      },
    });
    res.status(200).json(veiculo).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const excluir = async (req, res) => {
  try {
    let veiculo = await prisma.veiculos.delete({
      where: {
        id_veiculo: Number(req.params.id_veiculo)
      }
    });
    res.status(204).json({ msg: "excluido" }).end();
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404).json({ msg: "Veículo não encontrado" }).end();
    } else {
      res.status(500).json(err).end();
    }
  }
};

module.exports = {
  create,
  readAll,
  excluir
};
