//03) Leia o preço de dois produtos e informe qual é mais barato. Se forem iguais,
//exiba uma mensagem especial.

const readline = require(`readline-sync`);
let p1, p2; // aqui não precisa colocar o sinal de igual, pois não estou declarando nada
//prompt() é quem pergunta.
do {//parseFloat() transforma o que o usuário escreveu em um número com vírgula (ou ponto).
  p1 = parseInt(readline.question("digite o preco do primeiro produto:"));
} while (isNaN(p1));//isNaN(p1) verifica: “Isso que a pessoa digitou é um número ou não?”
//Se a pessoa digitar algo errado (como uma letra), ele pergunta de novo até vir um número certinho.
do {
  p2 = parseInt(readline.question("digiteo preco do segundo produto:"));
} while (isNaN(p2));

console.log(///aqui eu tinha colocado alert, mas não entrou aí coloquei o console.log
      p1 < p2
    ? "O primeiro produto é mais barato."
    : p2 < p1
    ? "O segundo produto é mais barato."
    : "Os dois produtos têm o mesmo preço! Oferta especial!"
);//Esse jeito com ? e : se chama operador ternário, que é uma forma curtinha de escrever um if...else.
console.log("fim do programa!");
