const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const login = async (req, res) => {
  console.log(req.body);
  try {
    if (
      req.body.email !== "" ||
      req.body.password !== "" ||
      req.body === undefined
    ) {
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
        { expiresIn: "10m" },
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
      req.body.nome !== "" ||
      req.body.email !== "" ||
      req.body.senha !== "" ||
      req.body.telefone !== "" ||
      req.body.cpf !== "" ||
      req.body.endereco !== ""
    ) {
      let funcionario = await prisma.funcionarios.create({
        data: req.body,
      });
      res.status(201).json({ msg: "Criado" }).end();
    } else {
      res.status(400).json({ msg: "Formulário inválido" }).end();
    }
  } catch (err) {
    if (err.code === "P2002") {
      res.status(400).json({ msg: "Email ou cpf já em uso" }).end();
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

module.exports = {
  login,
  create,
  read,
  readById,
};
