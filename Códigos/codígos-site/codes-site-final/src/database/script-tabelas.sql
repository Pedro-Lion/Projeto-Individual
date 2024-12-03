-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database filosofiaInata;

use filosofiaInata;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar(45),
senha varchar (30));

create table teste(
idTeste int primary key auto_increment,
fkUsuario int,
dtHora datetime default current_timestamp ,
maiorPontuacao int,
constraint fkUsuarioTeste foreign key (fkUsuario)
	references usuario(idUsuario),
estoicismo int,
existencialismo int, 
racionalismo int,
epicurismo int,
empirismo int,
humanismo int,
niilismo int
 );
 