let HT; // Horas Trabalhadas
let VH; // Valor Hora
let PD; // Percentual de Desconto
let TD; // Total de Desconto
let SB; // Salario Bruto
let SL; // Salario Liquido

HT = prompt('Digite as Horas Trabalhadas','Informe aqui.');
VH = prompt('Entre com valor da hora:','Informe aqui.');
PD = prompt('Informe o Percentual de desconto:','Em porcentagem');
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD;

document.write('Salario =' , SL)