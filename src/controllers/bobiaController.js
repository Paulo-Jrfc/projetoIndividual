const { GoogleGenAI } = require("@google/genai");
const chatIA = new GoogleGenAI({ apiKey: process.env.MINHA_CHAVE });

async function pergunta(req, res) {
    try {
        // gerando conteúdo com base na pergunta
        const modeloIA = chatIA.models.generateContent({
            model: "gemini-2.0-flash",
            contents:
                `Gere uma recomendação de veículo adequada ao cenário brasileiro, levando em conta o perfil de uso descrito abaixo.

                    As características do visitante são:
                    - Uso principal: ${req.body.uso}
                    - Tipo de trajeto: ${req.body.trajeto}
                    - Tipo de combustível preferido: ${req.body.combustivel}
                    - Tipo de câmbio: ${req.body.cambio}
                    - Número de passageiros: ${req.body.passageiros}
                    - Orçamento disponível: ${req.body.orcamento}
                    - Prioridade principal: ${req.body.prioridade}

                    Com base nisso, gere uma sugestão realista de um carro disponível no mercado brasileiro, preferencialmente modelos recentes (a partir de 2018) e coerentes com o orçamento indicado.

                    Os **dados que preciso do veículo recomendado** são e deverão ser no seguinte formato

                    {
                        "marca": "nome da marca",
                        "modelo": "nome do modelo",
                        "ano": "neste formato: 2018",
                        "categoria": "entre uma das categorias a seguir: 'SUV', 'Sedan', 'Hatch', 'Picape', 'Minivan', 'Crossover', 'Conversível', 'Coupé'",
                        "motor": "1.6 MSI",
                        "potencia": "117 cv (E) / 110 cv (G)",
                        "cambio": "Manual ou Automático",
                        "consumo_medio": formatado desta forma "cidade: 8,2 km/l (E) / 11,9 km/l (G) | estrada: 10,2 km/l (E) / 14,7 km/l (G)",
                        "capacidade_porta_malas": "em litros, neste formato: 521 litros",
                        "numero_ocupantes": "5",
                        "preco_medio_mercado": "Valor médio formato desejado: 70000",
                        "tipo_combustivel": "Flex, Etanol, Gasolina, Elétrico, Hibrido",
                        "justificativa": "deverá ter 355 caracteres"
                    }

                    Formate a resposta de forma organizada e clara, com os campos listados um por um.
                    Gostaria que todos os itens estivessem no formato JSON para que eu possa identificar.
                    Não gostaria de mensagens adicionais.                    
                `

        });
        const resposta = (await modeloIA).text;
        const tokens = (await modeloIA).usageMetadata;

        console.log(resposta);
        console.log("Uso de Tokens:", tokens);
        rsp = resposta.replace(/```json |```/g,'');
        rsp = rsp.replace('json','');
        console.log(rsp)

        const respostaJson = JSON.parse(rsp);

        res.status(200).json(respostaJson)


    } catch (error) {
        console.error(error);
        res.status(400).json(error)
    }
}

module.exports = {
    pergunta
}