const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const motoristas = require("../controllers/motoristas");

router.get("/read", motoristas.readAll);
router.get("/readById/:id_motorista", motoristas.readById);
router.post("/create", Middleware.validaAcesso ,motoristas.create);

module.exports = router;
