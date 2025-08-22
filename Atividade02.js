let leia = require('readline-sync'), nota = 0;

for(let i = 0; i < 4; i++){
    nota = nota + leia.questionFloat(`Nota ${i + 1}: `)
}

console.log(`Média final: ${(nota/4).toFixed(1)}`);