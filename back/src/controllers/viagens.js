const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const read = async (req, res) => {
  try {
    let viagem = await prisma.viagens.findMany({
      select: {
        id_viagem: true,
        id_veiculo: true,
        id_motorista: true,
        descricao: true,
        hora_saida: true,
        hora_retorno: true,
        veiculos: true,
      },
    });
    res.status(200).json(viagem).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 3) {
      let viagens = await prisma.viagens.create({
        data: {
          id_veiculo: req.body.id_veiculo,
          id_motorista: req.body.id_motorista,
          descricao: req.body.descricao,
          hora_saida: new Date(),
        },
      });

      viagens = await prisma.veiculos.update({
        where: {
          id_veiculo: req.body.id_veiculo,
        },
        data: {
          disponivel: false,
        },
      });

      res.status(201).json(viagens).end();
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

const updateChegou = async (req, res) => {
  try {
    let viagens = await prisma.viagens.update({
      where: {
        id_motorista: Number(req.params.id_motorista),
      },
      data: {
        hora_retorno: new Date(),
      },
    });

     viagens = await prisma.veiculos.update({
      where: {
        id_veiculo: Number(viagens.id_veiculo),
      },
      data: {
        disponivel: true,
      },
    });
    res.status(200).json(viagens).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

module.exports = { read, create, updateChegou };
