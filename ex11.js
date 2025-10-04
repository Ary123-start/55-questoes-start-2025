// 11) Simulador de Bilheteria
// Construa um programa que pergunte:
// • nome do cliente, idade e valor do ingresso.
// • Se idade <18, não vende.
// • Se valor ≥100, aplicar desconto de 20%.
// • Exiba mensagem final com nome, idade e valor pago.

const readline = require(`readline-sync`);


let nome, idade, valor;


// Repete enquanto a idade for menor que 18
do {
nome = readline.question("qual e o seu nome? : ");// aqui eu tinha errado a ordem do nome
idade = Number(readline.question("Digite sua idade:"));
  if (idade < 18) {
    console.log("Venda não permitida para menores de 18 anos.");
  }
} 

while (idade < 18);

// Repete enquanto o valor for menor ou igual a zero
do {
  valor = Number(readline.question("Digite o valor do ingresso:"));
  if (valor <= 0) {
    console.log("Valor inválido. Digite um valor acima de 0.");
  }
} while (valor <= 0);

// Aplica desconto se valor for maior ou igual a 100
if (valor >= 100) {
  valor = valor * 0.80; // Aplica 20% de desconto//Se o ingresso custar 100 reais ou mais,
//eu faço um desconto de 20%:
//"Pagar só 80% do valor" 
//Multiplico por 0.8, que significa pagar só 80% do valor.
}

console.log("Compra realizada com sucesso!");
console.log("Nome: " + nome);// nome é um testo fixo, O sinal de + aqui não é soma de números!
console.log("Idade: " + idade);//Ele está servindo para juntar textos.sso se chama concatenação
console.log("Valor pago: R$ " + valor.toFixed(2));//“Colar uma coisa na outra”
// o nome em branco é uma variaveel, ela guarda o que foi digitado no começo da pergunta,
// por exemplo  se o nome digitado for maria no console essa variavel vai gravar o nome maria
// e vaai apresentar no final do bilhete..

