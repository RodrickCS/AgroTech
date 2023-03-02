const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const funcionarios = require("../controllers/funcionarios");

router.post("/login", funcionarios.login);
router.get("/read", funcionarios.read);
router.get("/readById/:id_funcionario", funcionarios.readById);
router.post("/registrar", Middleware.validaAcesso, funcionarios.create);

module.exports = router;
