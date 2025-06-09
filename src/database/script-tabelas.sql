
-- Criando a databse
CREATE DATABASE veezy;

-- Selecionando a databse para uso
USE veezy;

-- Criando a tabela visitante
CREATE TABLE visitante (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    primeiroCarro CHAR(3),
    dtCadastro DATETIME NOT NULL,
    CONSTRAINT chkPrimeiroCarro CHECK(primeiroCarro IN ('Sim', 'Não'))
);

-- Criando a tabela veiculoRecomendado
CREATE TABLE veiculoRecomendado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(45) NOT NULL,
    modelo VARCHAR(45) NOT NULL,
    ano CHAR(4) NOT NULL,
    categoria VARCHAR(20),
    motor VARCHAR(50),
    potencia VARCHAR(100),
    cambio VARCHAR(100),
    consumoMedio VARCHAR(100),
    capacidadePortaMalas VARCHAR(45),
    numeroOcupantes INT,
    precoMedioMercado DECIMAL(10, 2),
    combustivel VARCHAR(20), 
    justificativa VARCHAR(355),
    dtRecomendacao DATETIME NOT NULL,
    fkVisitante INT,
    CONSTRAINT chkCategoria CHECK (categoria IN ('SUV', 'Sedan', 'Hatch', 'Picape', 'Minivan', 'Crossover', 'Conversível', 'Coupé')),
    CONSTRAINT chkCambio CHECK (cambio IN ('Manual', 'Automático')),
    CONSTRAINT chkCombustivel CHECK (combustivel IN ('Flex', 'Etanol', 'Gasolina', 'Elétrico', 'Hibrido', 'Diesel')),
    CONSTRAINT fkVeiculoVisitante FOREIGN KEY (fkVisitante) REFERENCES visitante(id)
);

SELECT * FROM visitante;
SELECT * FROM veiculoRecomendado;

