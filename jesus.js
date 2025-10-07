// const readline = require(`readline-sync`);
// let name = readline.question("quem e a pessoa mais favorita da sua vida?");


// i é sempre zero, ele é o contador da lista, o contador repete a frase digitada, pelo usuario
// for (let i = 0; i < 3; i++){// 3 vezes.
//     console.log (`${i + 2}. "I love ${name}"`);
// }       // aqui precisa chamar o contador pra dentro do  console mais o numero  que você quer que comece sua lista colocando o place holder
// console.log("")// use sempre a crase no inicio  do contador. i + o numero que quer , que inicie a sua lista.
//                que vai aparcer na lista a partir de 2, esse dois você pode ir trocando...


const readline = require (`readline-sync`);
let name = readline.question("quem e a pessoa mais importante da sua vida? ")
 

for( let i = 0; i < 3; i++){
    console.log(`te amo ${name}`);// aqui o contador nao foi adicionado, pois  não é um formato de lista. 
}
console.log(" fim do programa !");