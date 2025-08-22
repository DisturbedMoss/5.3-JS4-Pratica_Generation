let leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horasExtras;
const descontos = 200.00;

salarioBruto = leia.questionFloat("Salario Bruto: ");
adicionalNoturno = leia.questionFloat("Adicional Noturno: ");
horasExtras = leia.questionFloat("Horas Extras: ");

console.log(`Salário Líquido: ${(salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos).toFixed(2)}`);