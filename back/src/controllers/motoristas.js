const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
<<<<<<< HEAD
    if (
      Object.keys(req.body).length !== 0 &&
      Object.keys(req.body).length <= 4
    ) {
=======
    if (Object.keys(req.body).length === 4) {
>>>>>>> 893b4c8c89c2dca7d1626867c4adb30a8b79001d
      let motorista = await prisma.motoristas.create({
        data: req.body,
      });
      res.status(201).json({ msg: "Criado" }).end();
    } else {
      res.status(400).json({ msg: "Formulário inválido" }).end();
    }
  } catch (err) {
    if (err.code === "P2002") {
      res.status(400).json({ msg: "CPF já em uso" }).end();
    } else {
      res.status(500).json(err).end();
      console.log(err);
    }
  }
};

const readAll = async (req, res) => {
  try {
    let motorista = await prisma.motoristas.findMany({
      select: {
        id_motorista: true,
        nome: true,
        telefone: true,
        cpf: true,
        endereco: true,
      },
    });
    res.status(200).json(motorista).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const readById = async (req, res) => {
  try {
    let motorista = await prisma.motoristas.findUnique({
      where: {
        id_motorista: Number(req.params.id_motorista),
      },
      select: {
        id_motorista: true,
        nome: true,
        telefone: true,
        cpf: true,
        endereco: true,
        veiculos: true,
      },
    });
    res.status(200).json(motorista).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

module.exports = {
  create,
  readAll,
  readById,
};
