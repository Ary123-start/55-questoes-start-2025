// 08) Leia a idade e classifique: Infantil (até 12), Juvenil (13–17), Adulto (18–39),
//Master (40+).

const readline = require(`readline-sync`);

let idade = Number(readline.question("insira sua idade:"));

if (idade <=12){
    console.log("sua classificaçao é infantil");

}else if(idade >= 13 && idade <= 17){// precisa colocar o && pra conectar as duas idades e a 
    console.log("sua classificação é juvenil");// variavel idade

}else if (idade >= 18 && idade <= 39){//aqui precisa dar enfase a declaração idade.
    console.log("sua classificaçao atual é ala adulta");

}else{
    console.log("sua classificaçao atual é master");// aqui só abre a chave ecoloca o console
// com a classificação, senão.
}
console.log("fim do programa");
// tá rodando ok

   
 