const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const login = async (req, res) => {
  try {
    if (
      (req.body.email !== "" && req.body.password !== "") ||
      req.body === undefined
    ) {
      var funcionario = await prisma.funcionarios.findMany({
        where: {
          email: req.body.email,
          senha: req.body.senha,
        },
      });

      jwt.sign(
        { ...funcionario },
        process.env.KEY,
        { expiresIn: "10m" },
        function (err, token) {
          if (err == null) {
            console.log()
            funcionario["token"] = token;
            res
              .status(200)
              .json([{ token: token,},{role: funcionario[0].role}])
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

// const create = async (req, res) => {
//   if (req.body.email !== "" && req.body.senha !== "" && req.body) {
//     try {
//     } catch (err) {

//     }
//   }
// };

module.exports = {
  login,
};
