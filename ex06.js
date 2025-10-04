//06) Se o cliente gastar mais de R$200, aplique 15% de desconto; senão, apenas 5%.

const readline = require(`readline-sync`);
let valor;

do {
  valor = parseInt(readline.question("Digite o valor da compra:"));
} while (isNaN(valor) || valor < 0);

let desconto = valor > 200 ? valor * 0.15 : valor * 0.05;
let total = valor - desconto;

console.log(`Desconto: R$${desconto.toFixed(2)}\nTotal a pagar: R$${total.toFixed(2)}`);
console.log("fim do programa!");




