const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const veiculos = require("../controllers/veiculos");

router.get("/read", veiculos.readAll);
router.get("/readvw", veiculos.vw_viagensMobile);
router.post("/create", Middleware.validaAcesso, veiculos.create);
router.delete(
  "/excluir/:id_veiculo",
  Middleware.validaAcesso,
  veiculos.excluir
);

module.exports = router;
