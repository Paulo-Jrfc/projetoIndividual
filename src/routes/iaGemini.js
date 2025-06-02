var express = require("express");
var router = express.Router();

var bobiaController = require("../controllers/iaGeminiController");

//Recebendo os dados do html e direcionando para a função cadastrar de bobiaController.js
router.post("/pergunta", function (req, res) {
    bobiaController.pergunta(req, res);
})

router.post("/cadastrarVeiculo", function (req, res) {
    bobiaController.cadastrarVeiculo(req, res);
})


module.exports = router;
