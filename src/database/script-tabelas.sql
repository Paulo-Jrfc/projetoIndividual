-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE veezy;

USE veezy;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	dtNascimento DATE,
	email VARCHAR(50),
	senha VARCHAR(50),
	primeiroCarro CHAR(3),
	CONSTRAINT chkPrimeiroCarro CHECK(primeiroCarro IN ('Sim', 'Não'))
);

