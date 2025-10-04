// 14) Leia um número N. Use for para somar todos os números de 1 até N.


const readline = require("readline-sync");

let N = Number(readline.question("insira um numero:"));// precisa promeiro declarar a variável N
let soma = 0;

for ( let i = 1; i  <= N; i++){//
    soma = soma +i
}
console.log("soma de 1 ate " + N + " e " + soma );// aqui o terminal ficou tudo grudado
// porque precisa dar um espaço nas aspas pra deixar o terminal organizado