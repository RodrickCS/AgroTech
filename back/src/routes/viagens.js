const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const viagens = require("../controllers/viagens");

router.get("/read", viagens.read)
router.post("/create", viagens.create)
router.put("/update/:id_motorista", viagens.updateChegou)

module.exports = router;
