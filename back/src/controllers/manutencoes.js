const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (
<<<<<<< HEAD
      Object.keys(req.body).length !== 0 &&
      Object.keys(req.body).length <= 5
=======
      Object.keys(req.body).length === 5 ||
      Object.keys(req.body).length === 4
>>>>>>> 893b4c8c89c2dca7d1626867c4adb30a8b79001d
    ) {
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
<<<<<<< HEAD
=======

const update = async (req, res) => {
  try {
    if (Object.keys(req.body).length > 0) {
      let manutencao = await prisma.manutencoes.update({
        data: req.body,
      });
      res.status(204).json(manutencao);
    } else {     
      res.status(400).json({ msg: "Formulário inválido" });
    }
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};
>>>>>>> 893b4c8c89c2dca7d1626867c4adb30a8b79001d

module.exports = {
  create,
  read,
};
