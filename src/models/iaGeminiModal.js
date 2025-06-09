var database = require("../database/config")

function cadastrarVeiculo(marca, modelo, ano, categoria, motor, potencia, cambio,
    consumoMedio, capacidadePortaMalas, numeroOcupantes,
    precoMedioMercado, combustivel, justificativa, fkVisitante) {
    console.log("\n>> Acessando o veiculoModel.cadastrarVeiculo()");

    justificativa = justificativa.replace(/'/g, "''");
    precoMedioMercado = Number(precoMedioMercado);


    var instrucaoSql = `
        INSERT INTO veiculoRecomendado (
            marca, modelo, ano, categoria, motor, potencia, cambio,
            consumoMedio, capacidadePortaMalas, numeroOcupantes,
            precoMedioMercado, combustivel, justificativa,
            dtRecomendacao, fkVisitante
        ) VALUES ('${marca}', '${modelo}', '${ano}', '${categoria}', '${motor}', '${potencia}', '${cambio}',
                  '${consumoMedio}', '${capacidadePortaMalas}', ${numeroOcupantes},
                   ${precoMedioMercado}, '${combustivel}', '${justificativa}',
                   NOW(), ${fkVisitante}
            );
    `;

    return database.executar(instrucaoSql);
}

function buscarVeiculo(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarVeiculo():");

    var instrucaoSql = `
        SELECT * FROM veiculoRecomendado
            WHERE fkVisitante = ${idUsuario}
            ORDER BY dtRecomendacao DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarVeiculo,
    buscarVeiculo
};