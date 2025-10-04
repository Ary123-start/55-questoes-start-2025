// 05) Leia uma nota (0 a 10). Se ≥7 aprovado, entre 5 e 6.9 recuperação, menor que 5
// reprovado.

const readline = require(`readline-sync`);

let nota;

do {
  nota = parseFloat(readline.question("Digite a nota (0 a 10):"));
} while (isNaN(nota) || nota < 0 || nota > 10);

console.log(
  nota >= 7 ? "Aprovado" :
  nota >= 5 ? "Recuperação" :
  "Reprovado"
);
console.log("fim do programa!");