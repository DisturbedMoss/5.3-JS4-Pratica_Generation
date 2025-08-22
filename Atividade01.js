leia = require("readline-sync");

let salario = leia.questionFloat("Digite o Salario: ");
let abono = leia.questionFloat("Digite o Abono: ");

let novoSalario = salario + abono;

console.log(`
    Novo Salário: ${
        new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(novoSalario)
    }
`)