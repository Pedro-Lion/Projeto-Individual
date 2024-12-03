
var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    
   
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);


    var instrucaoSql = `
        INSERT INTO usuario (nome, senha, email) 
        VALUES ('${nome}', '${senha}', '${email}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function testeInserirModel(fkUsuario, maiorPontuacao, estoicismo,existencialismo, racionalismo, epicurismo, empirismo, humanismo, niilismo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function testeInserirModel:", fkUsuario, maiorPontuacao, estoicismo,existencialismo, racionalismo, epicurismo, empirismo, humanismo, niilismo);


    var instrucaoSql = `
        INSERT INTO teste (fkUsuario, maiorPontuacao, estoicismo,existencialismo, racionalismo, epicurismo, empirismo, humanismo, niilismo) 
        VALUES ('${fkUsuario}', '${maiorPontuacao}', '${estoicismo}','${existencialismo}','${racionalismo}','${epicurismo}','${empirismo}','${humanismo}','${niilismo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    testeInserirModel
};