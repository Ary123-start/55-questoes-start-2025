//10) Leia um número de 1 a 7 e exiba o dia correspondente (1=Domingo...7=Sábado).
//Se fora dessa faixa, exiba erro.

const readline = require(`readline-sync`);

let numero = Number(readline.question(" digite um numero de 1 a 7 : "));

if (numero === 1) {
  console.log("Domingo");
} else if (numero === 2) {
  console.log("Segunda -feira");
} else if (numero === 3) {
  console.log("terça-feira");
} else if (numero === 4) {
  console.log("quarta-feira");
} else if (numero === 5) {
  console.log("quinta-feira");
} else if (numero === 6) {
  console.log("sexta-feira");
} else if (numero === 7) {
  console.log("sabado");
} else {
  console.log("Erro: número inválido");// no else pra aparecer no terminal abre a chave 
  // escreve console.log, se nao não vai conseguir aparecer no terminal
}
console.log("fim do programa!")
