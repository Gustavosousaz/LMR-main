function MostrarNome() {
    let Nome = document.getElementById('pNome').value;
    let Sobrenome = document.getElementById('pSobre').value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá ' + NomeCompleto);
}

let valor1;
let valor2;
let resultado;
if (valor1 == "" || valor2 == "") {
    alert("Preencha todos os Campos")
} else {
    function Somar() {
        valor1 = document.getElementById('pv1').value;
        valor2 = document.getElementById('pv2').value;
        resultado = parseInt(valor1) + parseInt(valor2);
        alert("O resultado da Soma é " + resultado);

    }

    function Sub() {
        valor1 = document.getElementById('pv1').value;
        valor2 = document.getElementById('pv2').value;
        resultado = parseInt(valor1) - parseInt(valor2);
        alert("O resultado da Soma é " + resultado);
    }

    function Mult() {
        valor1 = document.getElementById('pv1').value;
        valor2 = document.getElementById('pv2').value;
        resultado = parseInt(valor1) * parseInt(valor2);
        alert("O resultado da multiplicação é " + resultado);
    }

    function Div() {
        valor1 = document.getElementById('pv1').value;
        valor2 = document.getElementById('pv2').value;
        if (valor1 == "" || valor2 == "") {
            alert("Preencha todos os campos");
        } else if (valor2 == 0) {
            alert("Não podemos dividir por 0");
        } else {
            resultado = parseInt(valor1) / parseInt(valor2);
            alert("O resultado da divisão é " + resultado);
        }
    }
}

