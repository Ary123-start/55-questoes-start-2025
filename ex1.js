 //01 ) Um caixa eletrônico precisa identificar se o valor de saque digitado é par ou
// ímpar para escolher a gaveta de cédulas correta. Leia um número inteiro e exiba
// “Par” ou “Ímpar”

const readline = require('readline-sync');
let numero;
do {
    numero = parseInt(readline.question("Digite um numero (0 para encerrar): "));
    if (numero !== 0) console.log(numero % 2 === 0 ? "Par" : "Ímpar");
} 
while (numero !== 0);
console.log("Fim de programa!");
