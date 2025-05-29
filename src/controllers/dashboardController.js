var dashboardModel = require("../models/dashboardModel");


function historicoVeicularSim(req, res) {
    dashboardModel.historicoVeicularSim().then((resultado) => { 
        res.status(200).json(resultado);
        console.log(resultado[0].quantidadeSim)
    });
}

function historicoVeicularNao(req, res) {
    dashboardModel.historicoVeicularNao().then((resultado) => { 
        res.status(200).json(resultado);
        console.log(resultado)
    });
}

function visitantesQueMaisPreencheram(req, res) {
    dashboardModel.visitantesQueMaisPreencheram().then((resultado) => { 
        res.status(200).json(resultado);
        console.log(resultado)
    });
}

function marcaMaisRecomendada(req, res) {
    dashboardModel.marcaMaisRecomendada().then((resultado) => { 
        res.status(200).json(resultado);
        console.log(resultado)
    });
}

function cadastradosUltimaSemana(req, res) {
    dashboardModel.cadastradosUltimaSemana().then((resultado) => { 
        res.status(200).json(resultado);
        console.log(resultado)
    });
}

function marcaMenosRecomendada(req, res) {
    dashboardModel.marcaMenosRecomendada().then((resultado) => { 
        res.status(200).json(resultado);
        console.log(resultado)
    });
}

function categoriaMaisRecomendada(req, res) {
    dashboardModel.categoriaMaisRecomendada().then((resultado) => { 
        res.status(200).json(resultado);
        console.log(resultado)
    });
}

module.exports = {
    historicoVeicularSim,
    historicoVeicularNao,
    visitantesQueMaisPreencheram,
    marcaMaisRecomendada,
    cadastradosUltimaSemana,
    marcaMenosRecomendada,
    categoriaMaisRecomendada
}