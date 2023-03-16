const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const manutencoes = require("../controllers/manutencoes");

router.get("/read", manutencoes.read);
router.get("/readvwg", manutencoes.vw_gastoNoMes);
router.get("/readvwmb", manutencoes.vw_manutencaoMobile);
router.get("/readvwm", manutencoes.vw_tableManutencao);
router.post("/create", Middleware.validaAcesso, manutencoes.create);
router.put(
  "/update/:id_manutencao",
  Middleware.validaAcesso,
  manutencoes.update
);

module.exports = router;
