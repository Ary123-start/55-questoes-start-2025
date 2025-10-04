 //02) Em um show, só entra quem tiver 18 anos ou mais. Leia a idade do usuário e
// informe se ele pode ou não entrar.

const readline = require('readline-sync');
let idade = parseInt(readline.question("insira sua idade: "));
if(idade >= 18){
    console.log("sua idade é compatível com as regras do estabelecimento!");}
else
    (console.log("infelizmente você não atingiu a idade para participar desse show"));
console.log("fim do programa!");
