-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!


/* comandos para mysql server */

CREATE DATABASE veezy;
USE veezy;

CREATE TABLE visitante (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    dtNascimento DATE,
    email VARCHAR(50),
    senha VARCHAR(50),
    primeiroCarro CHAR(3),
    dtCadastro DATETIME NOT NULL,
    CONSTRAINT chkPrimeiroCarro CHECK(primeiroCarro IN ('Sim', 'Não'))
);

CREATE TABLE veiculorecomendado (
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

SELECT * FROM veiculorecomendado;



INSERT INTO visitante (nome, dtNascimento, email, senha, primeiroCarro, dtCadastro) VALUES
('Lucas Silva',     '1995-04-12', 'lucas.silva@mail.com',      '123', 'Sim', NOW()),
('Mariana Costa',   '1990-08-25', 'mariana.costa@mail.com',    '123', 'Não', NOW()),
('João Pereira',    '1988-02-03', 'joao.pereira@mail.com',     '123', 'Sim', NOW()),
('Ana Souza',       '2000-10-18', 'ana.souza@mail.com',        '123', 'Não', NOW()),
('Carlos Mendes',   '1992-05-05', 'carlos.mendes@mail.com',    '123', 'Sim', NOW()),
('Fernanda Lima',   '1998-07-22', 'fernanda.lima@mail.com',    '123', 'Não', NOW()),
('Bruno Rocha',     '1996-03-10', 'bruno.rocha@mail.com',      '123', 'Sim', NOW()),
('Patrícia Gomes',  '1991-12-01', 'patricia.gomes@mail.com',   '123', 'Não', NOW()),
('Felipe Almeida',  '1987-06-30', 'felipe.almeida@mail.com',   '123', 'Sim', NOW()),
('Juliana Martins', '1994-09-15', 'juliana.martins@mail.com',  '123', 'Não', NOW()),
('Rafael Torres',   '1993-11-20', 'rafael.torres@mail.com',    '123', 'Sim', NOW()),
('Bruna Fernandes', '1997-01-14', 'bruna.fernandes@mail.com',  '123', 'Não', NOW()),
('Gustavo Rocha',   '1989-04-27', 'gustavo.rocha@mail.com',    '123', 'Sim', NOW()),
('Carla Dias',      '1995-02-08', 'carla.dias@mail.com',       '123', 'Não', NOW()),
('Eduardo Pinto',   '1990-07-03', 'eduardo.pinto@mail.com',    '123', 'Sim', NOW()),
('Julio César',     '1986-12-11', 'julio.cesar@mail.com',      '123', 'Não', NOW()),
('Marisa Santos',   '1999-05-19', 'marisa.santos@mail.com',    '123', 'Sim', NOW()),
('Igor Nascimento', '1992-08-29', 'igor.nascimento@mail.com',  '123', 'Não', NOW()),
('Larissa Freitas', '1994-03-07', 'larissa.freitas@mail.com',  '123', 'Sim', NOW()),
('Vinícius Costa',  '1988-10-23', 'vinicius.costa@mail.com',   '123', 'Não', NOW());







SELECT v.nome, COUNT(vr.id) AS total_veiculos
FROM visitante v
JOIN veiculoRecomendado vr ON v.id = vr.fkVisitante
GROUP BY v.id, v.nome
ORDER BY total_veiculos DESC
LIMIT 3;

SELECT marca, COUNT(*) AS total_recomendacoes
FROM veiculoRecomendado
GROUP BY marca
ORDER BY total_recomendacoes DESC
LIMIT 5;

SELECT COUNT(*) AS total_usuarios
FROM visitante
WHERE dtCadastro >= CURDATE() - INTERVAL 7 DAY;

SELECT marca
FROM veiculoRecomendado
GROUP BY marca
ORDER BY COUNT(*) ASC, MIN(dtRecomendacao) ASC
LIMIT 1;

SELECT 
    categoria, 
    COUNT(*) AS total_recomendacoes
FROM veiculoRecomendado
GROUP BY categoria
ORDER BY total_recomendacoes DESC
LIMIT 1;

SELECT * FROM veiculoRecomendado;




SELECT * FROM visitante;
SELECT * FROM veiculoRecomendado;
TRUNCATE TABLE usuario;

