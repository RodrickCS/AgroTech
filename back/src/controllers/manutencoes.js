const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 3) {
      let manutencao = await prisma.manutencoes.create({
        data: {
          id_veiculo: req.body.id_veiculo,
          valor_gasto: req.body.valor_gasto,
          descricao: req.body.descricao,
          data_inicio: new Date(),
        },
      });

      let veiculos = await prisma.veiculos.update({
        where: {
          id_veiculo: manutencao.id_veiculo,
        },
        data: {
          disponivel: false,
        },
      });

      res.status(201).json(manutencao);
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

const update = async (req, res) => {
  try {
    let manutencao = await prisma.manutencoes.update({
      where: {
        id_manutencao: Number(req.params.id_manutencao),
      },
      data: {
        data_fim: new Date(),
      },
    });

    let veiculos = await prisma.veiculos.update({
      where: {
        id_veiculo: manutencao.id_veiculo,
      },
      data: {
        disponivel: true,
      },
    });

    res.status(200).json(manutencao);
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const vw_gastoNoMes = async (req, res) => {
  try {
    let manutencao =
      await prisma.$queryRaw`SELECT MONTH(data_inicio) AS mes, SUM(valor_gasto) AS total FROM Manutencoes WHERE YEAR(data_inicio) = YEAR(curdate()) GROUP BY mes ORDER BY mes ASC`;

    res.status(200).json(manutencao);
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const vw_tableManutencao = async (req, res) => {
  try {
    let manutencao =
      await prisma.$queryRaw`select m.id_manutencao, v.id_veiculo, v.marca, v.placa,m.data_inicio, m.data_fim, m.valor_gasto, m.descricao from Manutencoes m inner join Veiculos v on m.id_veiculo = v.id_veiculo;`;

    res.status(200).json(manutencao);
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const vw_manutencaoMobile = async (req, res) => {
  try {
    let manutencao =
      await prisma.$queryRaw`SELECT ve.marca, ve.placa, ma.data_inicio, ma.valor_gasto, ma.descricao FROM Manutencoes ma INNER JOIN Veiculos ve on ma.id_veiculo = ve.id_veiculo WHERE ma.data_fim IS NULL`;

    res.status(200).json(manutencao);
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = {
  create,
  read,
  update,
  vw_gastoNoMes,
  vw_tableManutencao,
  vw_manutencaoMobile,
};
