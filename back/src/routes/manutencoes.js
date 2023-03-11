const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const manutencoes = require("../controllers/manutencoes");

router.get("/read", manutencoes.read);
router.get("/readvw", manutencoes.vw_gastoNoMes);
router.post("/create", Middleware.validaAcesso, manutencoes.create);
router.put(
  "/update/:id_manutencao",
  Middleware.validaAcesso,
  manutencoes.update
);

module.exports = router;
