const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const frotas = require("../controllers/frotas");

router.get("/read", frotas.readAll);
router.get("/read/:id_frota", frotas.readId);
router.post("/create", Middleware.validaAcesso, frotas.create);

module.exports = router;
