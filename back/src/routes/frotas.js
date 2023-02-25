const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const frotas = require("../controllers/frotas");

router.get("/read", frotas.readAll);
router.post("/create",frotas.create);

module.exports = router;