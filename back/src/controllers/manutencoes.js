const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 5) {
      let manutencao = await prisma.manutencoes.create({
        data: req.body,
      });
      res.status(201).json({ msg: "Criado" });
    } else {
      res.status(400).json({ msg: "Formulário inválido" });
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

module.exports = {
  create,
  read,
};
