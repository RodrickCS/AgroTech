const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 5) {
      let motorista = await prisma.motoristas.create({
        data: req.body,
      });
      res.status(201).json({ msg: "Criado" }).end();
    } else {
      res.status(400).json({ msg: "Formulário inválido" }).end();
    }
  } catch (err) {
    if (err.code === "P2002") {
      res.status(400).json({ msg: "CPF, CNH ou telefone já em uso" }).end();
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
        disponivel: true,
        telefone: true,
        cpf: true,
        cnh: true,
        endereco: true,
        veiculos: true,
        viagem: true,
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

const excluir = async (req, res) => {
  try {
    let motoristas = await prisma.motoristas.delete({
      where: {
        id_motorista: Number(req.params.id_motorista)
      }
    });
    res.status(204).json({ msg: "excluido" }).end();
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404).json({ msg: "Motorista não encontrado" }).end();
    } else {
      res.status(500).json(err).end();
    }
  }
};

module.exports = {
  create,
  readAll,
  readById,
  excluir
};
