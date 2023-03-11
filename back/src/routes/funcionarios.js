const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const funcionarios = require("../controllers/funcionarios");

router.post("/login", funcionarios.login);
router.get("/read", funcionarios.read);
router.get("/readById/:id_funcionario", funcionarios.readById);
router.post("/registrar", funcionarios.create);
router.delete("/excluir/:id_funcionario", funcionarios.excluir);

module.exports = router;
