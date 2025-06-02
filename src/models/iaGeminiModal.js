var database = require("../database/config")

function cadastrarVeiculo(marca, modelo, ano, categoria, motor, potencia, cambio,
    consumoMedio, capacidadePortaMalas, numeroOcupantes,
    precoMedioMercado, combustivel, justificativa, fkVisitante) {
    console.log("\n>> Acessando o veiculoModel.cadastrarVeiculo()");

    justificativa = justificativa.replace(/'/g, "''");
    precoMedioMercado = Number(precoMedioMercado);


    var instrucaoSql = `
        INSERT INTO veiculorecomendado (
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

module.exports = {
    cadastrarVeiculo
};