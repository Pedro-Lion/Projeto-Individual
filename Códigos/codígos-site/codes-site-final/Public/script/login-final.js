var logar = document.querySelector("#Logar")
var cadastrar = document.querySelector("#Cadastrar")

var body = document.querySelector("body")

logar.addEventListener("click",function(){
    body.className = "login-js";
})

cadastrar.addEventListener("click",function(){
    body.className = "cadastro-js";
})