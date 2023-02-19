const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000

const funcionariosRouter = require("./src/routes/funcionarios");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/funcionarios", funcionariosRouter);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
