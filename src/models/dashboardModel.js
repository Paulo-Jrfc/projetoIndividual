var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function historicoVeicular() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function historicoVeicular():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucaoSqlSim = `SELECT COUNT(*) AS quantidade FROM visitante WHERE primeiroCarro = 'Sim';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSqlSim);
    return database.executar(instrucaoSqlSim);
}

module.exports = {
    historicoVeicular
};