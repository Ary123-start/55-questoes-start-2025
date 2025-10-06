
//15) Peça ao usuário um número inteiro positivo N. Calcule o fatorial de N
//(N! = N*(N-1)*(N-2)*...*1) usando for.

const readline = require("readline-sync");

let N = parseInt(readline.question("insira um numero inteiro positivo: "));
// numeros inteiros um número sem vírgula (ou seja, sem casas decimais)
//e que é maior que zero por isso eu usei o parseint, porque ele só trabalha com 
// numeros inteiros Inteiros = não têm vírgula (como 2.5 ou 3,14 
// Positivos = estão acima de zero (não são negativos

