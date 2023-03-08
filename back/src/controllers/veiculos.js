const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 6) {
      let veiculo = await prisma.veiculos.create({
        data: req.body,
      });
      res.status(201).json(veiculo).end();
    } else {
      res.status(400).json({ msg: "Formulário inválido" }).end();
    }
  } catch (err) {
    if (err.code === "P2003") {
      res
        .status(400)
        .json([
          { msg: "Erro no formulário cheque as informações e tente novamente" },
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
        motoristas: true,
        manutencoes: true,
      },
    });
    res.status(200).json(veiculo).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

module.exports = {
  create,
  readAll,
};
