var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;  
    var senha = req.body.senhaServer;

        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].idUsuario,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome, 
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }).catch(function (erro) {
                console.log("Erro na autenticação:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }


function cadastrar(req, res) {
    // Crie variáveis para recuperar os valores enviados no cadastro
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

        // Chama a função cadastrar no modelo com os valores capturados
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function testeInserir(req, res) {
        // Crie variáveis para recuperar os valores enviados no cadastro
        var fkUsuario = req.body.fkUsuarioServer;
        var maiorPontuacao = req.body.maiorPontuacaoServer;
        var estoicismo = req.body.estoicismoServer;
        var existencialismo = req.body.existencialismoServer;
        var racionalismo = req.body.racionalismoServer;
        var epicurismo = req.body.epicurismoServer;
        var empirismo = req.body.empirismoServer;
        var humanismo = req.body.humanismoServer;
        var niilismo = req.body.niilismoServer;
    
            // Chama a função cadastrar no modelo com os valores capturados
            usuarioModel.testeInserirModel(fkUsuario, maiorPontuacao, estoicismo,existencialismo, racionalismo, epicurismo, empirismo, humanismo, niilismo)
                .then(
                    function (resultado) {
                        res.json(resultado);
                        console.log("teste bem sucedido!")
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao inserir o teste! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    
    

module.exports = {
    autenticar,
    cadastrar,
    testeInserir
};