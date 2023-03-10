const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const funcionariosRouter = require("./src/routes/funcionarios");
const motoristasRoutes = require("./src/routes/motoristas");
const manutencoesRoutes = require("./src/routes/manutencoes");
const veiculosRoutes = require("./src/routes/veiculos");
const viagensRoutes = require("./src/routes/viagens");
const frotasRoutes = require("./src/routes/frotas");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/funcionarios", funcionariosRouter);
app.use("/manutencoes", manutencoesRoutes);
app.use("/motoristas", motoristasRoutes);
app.use("/veiculos", veiculosRoutes);
app.use("/viagens", viagensRoutes);
app.use("/frotas", frotasRoutes);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
