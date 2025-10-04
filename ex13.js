// 13) Solicite ao usuário um número inteiro de 1 a 10. Usando for, mostre a tabuada
//desse número (de 1 até 10).

const readline = require ("readline-sync");

let numero = Number(readline.question("Digite um numero de 1 a 10 para ver a tabuada:"));

// Verifica se o número está no intervalo certo
if (numero >= 1 && numero <= 10) {// aqui eu poderia colocar o zero se eu quizesse.
  // Loop que vai de 1 até 10
  for (let i = 1; i <= 10; i++) {// aqui é uma expressão praticamente fixa.
    // Mostra a tabuada no console
    console.log(numero + " x " + i + " = " + (numero * i));
  }
} else {
  console.log("Erro: o número deve estar entre 1 e 10.");
}
console.log("fim do programa!");