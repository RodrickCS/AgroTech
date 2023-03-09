const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 3) {
      let manutencao = await prisma.manutencoes.create({
        data: {
          id_veiculo: req.body.id_veiculo,
          valor_gasto: req.body.valor_gasto,
          descricao: req.body.descricao,
          data_inicio: new Date()
        },
      });

      let veiculos = await prisma.veiculos.update({
        where: {
          id_veiculo: manutencao.id_veiculo,
        },
        data: {
          disponivel: false,
        },
      });

      res.status(201).json(manutencao);
    }
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const read = async (req, res) => {
  try {
    let manutencao = await prisma.manutencoes.findMany();
    res.status(200).json(manutencao).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const update = async (req, res) => {
  try {
    let manutencao = await prisma.manutencoes.update({
      where: {
        id_manutencao: Number(req.params.id_manutencao),
      },
      data: {
        data_fim: new Date(),
      },
    });

    let veiculos = await prisma.veiculos.update({
      where: {
        id_veiculo: manutencao.id_veiculo,
      },
      data: {
        disponivel: true,
      },
    });

    res.status(200).json(manutencao);
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

module.exports = {
  create,
  read,
  update,
};
