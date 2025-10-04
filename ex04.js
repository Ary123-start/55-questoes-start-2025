//04) Leia uma temperatura em graus Celsius e diga se a água estaria no estado
//sólido (≤0), líquido (entre 0 e 100) ou gasoso (>100).

const readline = require(`readline-sync`);
// aqui eu quis trabalhar com parseint pra ele entender que é um número
let temperatura;

do{
   temperatura = parseInt(readline.question("insira a temperaatura em °C:"));
 } while (isNaN(temperatura));
 
 console.log(
    temperatura <= 0
      ? "estado solido (gelo)"
      : temperatura <= 100
      ? "estado liquido (agua)"
      : "estado gasoso (vapor)"
 );
console.log("fim do programa");