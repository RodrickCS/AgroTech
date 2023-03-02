const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const viagens = require("../controllers/viagens");

router.get("/read", viagens.read)
router.post("/create", viagens.create)

module.exports = router;
