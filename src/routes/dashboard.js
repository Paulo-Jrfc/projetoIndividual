var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js

router.get("/historicoVeicularSim", function (req, res) {
    dashboardController.historicoVeicularSim(req, res);
});

router.get("/historicoVeicularNao", function (req, res) {
    dashboardController.historicoVeicularNao(req, res);
});

router.get("/visitantesQueMaisPreencheram", function (req, res) {
    dashboardController.visitantesQueMaisPreencheram(req, res);
});

router.get("/marcaMaisRecomendada", function (req, res) {
    dashboardController.marcaMaisRecomendada(req, res);
});

router.get("/cadastradosUltimaSemana", function (req, res) {
    dashboardController.cadastradosUltimaSemana(req, res);
});

router.get("/marcaMenosRecomendada", function (req, res) {
    dashboardController.marcaMenosRecomendada(req, res);
});

router.get("/categoriaMaisRecomendada", function (req, res) {
    dashboardController.categoriaMaisRecomendada(req, res);
});

module.exports = router;