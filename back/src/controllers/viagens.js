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
        motorista: true,
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

      motoristas = await prisma.motoristas.update({
        where: {
          id_motorista: req.body.id_motorista,
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
        id_viagem: Number(req.params.id_viagem),
      },
      data: {
        hora_retorno: new Date(),
      },
    });

    let veiculos = await prisma.veiculos.update({
      where: {
        id_veiculo: Number(viagens.id_veiculo),
      },
      data: {
        disponivel: true,
      },
    });

    let motoristas = await prisma.motoristas.update({
      where: {
        id_motorista: Number(viagens.id_motorista),
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

const excluir = async (req, res) => {
  try {
    let veiculo = await prisma.viagens.delete({
      where: {
        id_viagem: Number(req.params.id_viagem),
      },
    });
    res.status(204).json({ msg: "excluído" }).end();
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404).json({ msg: "Viagem não encontrado" }).end();
    } else {
      res.status(500).json(err).end();
    }
  }
};

module.exports = { read, create, updateChegou, excluir };
