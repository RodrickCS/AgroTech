const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const login = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 2) {
      var funcionario = await prisma.funcionarios.findMany({
        where: {
          email: req.body.email,
          senha: req.body.senha,
        },
      });
      if (funcionario.length === 0) {
        res.status(404).json({ msg: "Funcionario não encontrado" }).end();
      }

      jwt.sign(
        { ...funcionario },
        process.env.KEY,
        { expiresIn: "1h" },
        function (err, token) {
          if (err == null) {
            funcionario["token"] = token;
            res
              .status(200)
              .json([{ token: token }, { role: funcionario[0].role }])
              .end();
          } else {
            res.status(400).json(err).end();
            console.log(err);
          }
        }
      );
    } else {
      res.status(400).json({ msg: "Credenciais inválidas" }).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err }).end();
  }
};

const create = async (req, res) => {
  try {
    if (
      Object.keys(req.body).length === 7 ||
      Object.keys(req.body).length === 6
    ) {
      let funcionario = await prisma.funcionarios.create({
        data: req.body,
      });
      res.status(201).json({ msg: "Registrado" }).end();
    } else {
      res.status(400).json({ msg: "Formulário inválido" }).end();
    }
  } catch (err) {
    if (err.code === "P2002") {
      res.status(400).json({ msg: "Email, telefone ou CPF já em uso" }).end();
    } else {
      res.status(500).json(err).end();
    }
  }
};

const read = async (req, res) => {
  try {
    let funcionario = await prisma.funcionarios.findMany();
    res.status(200).json(funcionario).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const readById = async (req, res) => {
  try {
    let funcionario = await prisma.funcionarios.findUnique({
      where: {
        id_funcionario: Number(req.params.id_funcionario),
      },
    });
    res.status(200).json(funcionario).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const excluir = async (req, res) => {
  try {
    let funcionario = await prisma.funcionarios.delete({
      where: {
        id_funcionario: Number(req.params.id_funcionario),
      },
    });
    res.status(204).json({ msg: "excluido" }).end();
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404).json({ msg: "Funcionário não encontrado" }).end();
    } else {
      res.status(500).json(err).end();
    }
  }
};

module.exports = {
  login,
  create,
  read,
  readById,
  excluir,
};
