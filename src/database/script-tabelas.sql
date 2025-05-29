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

CREATE TABLE veiculoRecomendado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(45),
    modelo VARCHAR(45),
    ano CHAR(4),
    categoria VARCHAR(20),
    dtRecomendacao DATETIME NOT NULL,
    fkVisitante INT,
    CONSTRAINT chkCategoria CHECK (categoria IN ('SUV', 'Sedan', 'Hatch', 'Picape', 'Minivan', 'Crossover', 'Conversível', 'Coupé')),
    CONSTRAINT fkVeiculoVisitante FOREIGN KEY (fkVisitante) REFERENCES visitante(id)
);

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

INSERT INTO veiculoRecomendado (marca, modelo, ano, categoria, dtRecomendacao, fkVisitante) VALUES
('Toyota',      'Corolla',       '2020', 'Sedan',       NOW(),  1),
('Honda',       'HR-V',          '2021', 'SUV',         NOW(),  2),
('Ford',        'Ka',            '2019', 'Hatch',       NOW(),  3),
('Chevrolet',   'Onix',          '2022', 'Hatch',       NOW(),  4),
('Volkswagen',  'T-Cross',       '2021', 'SUV',         NOW(),  5),
('Hyundai',     'HB20',          '2020', 'Hatch',       NOW(),  6),
('Nissan',      'Kicks',         '2023', 'SUV',         NOW(),  7),
('Renault',     'Sandero',       '2019', 'Hatch',       NOW(),  8),
('Fiat',        'Argo',          '2022', 'Hatch',       NOW(),  9),
('Jeep',        'Renegade',      '2021', 'Crossover',   NOW(), 10),
('Peugeot',     '208',           '2020', 'Hatch',       NOW(), 11),
('Citroën',     'C3',            '2018', 'Hatch',       NOW(), 12),
('Kia',         'Sportage',      '2022', 'SUV',         NOW(), 13),
('Mitsubishi',  'ASX',           '2019', 'SUV',         NOW(), 14),
('Subaru',      'Forester',      '2021', 'SUV',         NOW(), 15),
('BMW',         'X1',            '2023', 'SUV',         NOW(), 16),
('Audi',        'A3',            '2020', 'Sedan',       NOW(), 17),
('Mercedes-Benz','GLA',          '2022', 'SUV',         NOW(), 18),
('Volkswagen',  'Nivus',         '2021', 'Crossover',   NOW(), 19),
('Chevrolet',   'Tracker',       '2023', 'SUV',         NOW(), 20);



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

