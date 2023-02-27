const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const veiculos = require("../controllers/veiculos");

router.get("/read", veiculos.readAll);
router.post("/create", veiculos.create);

module.exports = router;
