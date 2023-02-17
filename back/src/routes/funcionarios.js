const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const funcionarios = require("../controllers/funcionarios");

router.post("/login", funcionarios.login);

module.exports = router;
