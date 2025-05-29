var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function historicoVeicularSim() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function historicoVeicular():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucaoSql = `SELECT COUNT(*) AS quantidadeSim FROM visitante WHERE primeiroCarro = 'Sim';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function historicoVeicularNao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function historicoVeicular():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucaoSql = `SELECT COUNT(*) AS quantidadeNao FROM visitante WHERE primeiroCarro = 'Não';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function visitantesQueMaisPreencheram() {
 console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function visitantesQueMaisPreencheram():");

    var instrucaoSql = `SELECT v.nome, COUNT(vr.id) AS total_veiculos FROM visitante v
                            JOIN veiculoRecomendado vr ON v.id = vr.fkVisitante
                            GROUP BY v.id, v.nome
                            ORDER BY total_veiculos DESC
                            LIMIT 3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function marcaMaisRecomendada() {
 console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function marcaMaisRecomendada():");

    var instrucaoSql = `SELECT marca, COUNT(*) AS total_recomendacoes FROM veiculoRecomendado
                            GROUP BY marca
                            ORDER BY total_recomendacoes DESC
                            LIMIT 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastradosUltimaSemana() {
 console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastradosUltimaSemana():");

    var instrucaoSql = `SELECT COUNT(*) AS total_usuarios FROM visitante
                            WHERE dtCadastro >= CURDATE() - INTERVAL 7 DAY;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function marcaMenosRecomendada() {
 console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function marcaMenosRecomendada():");

    var instrucaoSql = `SELECT marca FROM veiculoRecomendado
                            GROUP BY marca
                            ORDER BY COUNT(*) ASC, MIN(dtRecomendacao) ASC
                            LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function categoriaMaisRecomendada() {
 console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function categoriaMaisRecomendada():");

    var instrucaoSql = `SELECT categoria, COUNT(*) AS total_recomendacoes 
                            FROM veiculoRecomendado
                            GROUP BY categoria
                            ORDER BY total_recomendacoes DESC
                            LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    historicoVeicularSim,
    historicoVeicularNao,
    visitantesQueMaisPreencheram,
    marcaMaisRecomendada, 
    cadastradosUltimaSemana,
    marcaMenosRecomendada,
    categoriaMaisRecomendada
};