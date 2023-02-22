const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 1) {
      let veiculo = await prisma.frota.create({
        data: req.body,
      });
      res.status(201).json(veiculo).end();
    } else {
      res.status(400).json({ msg: "Formulário inválido" }).end();
    }
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const readAll = async (req, res) => {
  try {
    let veiculo = await prisma.frota.findMany({
      select: {
        id_frota: true,
        tipo: true,
        veiculos: true,
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
