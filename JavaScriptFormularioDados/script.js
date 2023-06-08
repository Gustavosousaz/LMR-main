let Nome = document.getElementById("Nome").value;
let Endereço = document.getElementById("Endereço").value;
let Email = document.getElementById("Email").value;
let ConfEmail = document.getElementById("ConfEmail").value;
let Senha = document.getElementById("Senha").value;
let ConfSenha = document.getElementById("ConfSenha").value;

function Enviar(){
    // conferência dos Campos
    if(Nome==""){
        alert("Campo Nome não Preenchido");
    }else if(Endereco==""){
        alert("Campo Endereço não Preenchido");
    }else if(Email==""){
        alert("Campo Email não Preenchido");
    }else if(Senha==""){
        alert("Campo Senha não Preenchido");
    } else{
        alert("Formulário enviado")
    }
}
function verificarEmail(){
    if(Email != ConfEmail){
        alert("Campo Confirmar Email não Confere")
    }
}

function verificarSenha(){
    if(Senha != CSonfSenha){
        alert("Campo Confirmar Senha não Confere")
    }
}