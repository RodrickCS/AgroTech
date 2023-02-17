const express = require("express");
const cors = require("cors");

const funcionariosRouter = require("./src/routes/funcionarios");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/funcionarios", funcionariosRouter);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
