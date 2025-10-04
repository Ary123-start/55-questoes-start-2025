// Leia o salário. Se até 2000, isento; entre 2000–5000, 10%; acima de 5000, 20%.

const readline = require(`readline-sync`);

let salario = parseFloat(readline.question("insira o salario :"));//aqui é usado o parseFloat
              // porque ele pega os centavos das casas decimais.
                             // se fosse usado o parseint ele iria ignorar todos os numeros 
let desconto = 0;           // decimais e só entende numeros  inteiros.
// desconto precisa ser igual a zero, pois não  sabemos ainda.
if (salario <= 2000) {
  console.log("voce esta isento!");

} else if (salario >= 2000 && salario <=5000){// aqui eu tinha invertido a logica e errei os sinais
         desconto = salario * 0.10; // se for > maior que 2000 e sefor <menor  que 5000
console.log(`seu desconto foi de R$  ${desconto.toFixed(2)} 10%`);
// aqui presisa puxar o desconto pra dentro do console, depois que calcular ele abaixo da declaração.

}else{//no else só abre a chave e faz o calculo abaixo.
    desconto = salario * 0.20;
    console.log(`seu desconto foi de R$ ${desconto.toFixed(2)} 20%`)
}
   console.log("fim do programa"); 

    