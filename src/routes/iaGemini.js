var express = require("express");
var router = express.Router();

var iaGeminiController = require("../controllers/iaGeminiController");

//Recebendo os dados do html e direcionando para a função cadastrar de iaGeminiController.js
router.post("/pergunta", function (req, res) {
    iaGeminiController.pergunta(req, res);
})

router.post("/cadastrarVeiculo", function (req, res) {
    iaGeminiController.cadastrarVeiculo(req, res);
})

router.post("/buscarVeiculo", function (req, res) {
    console.log('ESTOU NO IAGEMINI.JS')
    iaGeminiController.buscarVeiculo(req, res);
})


module.exports = router;
