//12) Peça ao usuário um número inteiro positivo N. Utilizando um laço for, imprima
//na tela todos os números de 1 até N, acompanhados de uma mensagem
//explicativa.

const readline = require(`readline-sync`);

// Pede ao usuário um número inteiro positivo
let N = Number(readline.question("Digite um numero inteiro positivo:"));
// N será o numero que o usuario digitar 
// Repete do número 1 até o número N por exemplo 10
for (let i = 1; i <= N; i++) {
  // Mostra uma mensagem explicando o número atual
  console.log("Contando: agora estamos no número " + i);
}