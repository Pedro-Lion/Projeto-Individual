create database filosofiaInatadb;

use filosofiaInatadb;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
idade varchar (45),
cidade varchar(45),
país varchar (45),
login varchar(45),
senha varchar (30));

create table filosofo(
idFilosofo int primary key,
nome varchar(45),
resumo varchar(300)
);

create table teste(
idTeste int primary key auto_increment,
fkUsuario int,
fkFilosofo int,
dtHora datetime,
maiorPorcentagem int,
constraint fkUsuarioTeste foreign key (fkUsuario)
	references usuario(idUsuario),
constraint fkFilosofoTeste foreign key (fkFilosofo)
	references filosofo(idFilosofo)
 );
 
 
 