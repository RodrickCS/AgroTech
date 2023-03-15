const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const viagens = require("../controllers/viagens");

router.get("/read", viagens.read);
router.post("/create", Middleware.validaAcesso, viagens.create);
router.delete("/excluir/:id_viagem", Middleware.validaAcesso, viagens.excluir);
router.put("/update/:id_viagem", Middleware.validaAcesso, viagens.updateChegou);

module.exports = router;
