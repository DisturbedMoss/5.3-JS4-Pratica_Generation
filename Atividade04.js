let leia = require('readline-sync'), n1, n2, n3, n4;

n1 = leia.questionInt("numero 1: ");
n2 = leia.questionInt("numero 2: ");
n3 = leia.questionInt("numero 3: ");
n4 = leia.questionInt("numero 4: ");

console.log(`Diferença: ${((n1*n2)-(n3*n4)).toFixed(1)}`)