const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const manutencoes = require("../controllers/manutencoes");

router.get("/read", manutencoes.read);
router.post("/create", manutencoes.create);

module.exports = router;
