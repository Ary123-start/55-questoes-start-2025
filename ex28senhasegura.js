//28) Criação de Senha Segura: Solicite uma senha e valide-a com as seguintes
// regras:

// • Deve ter pelo menos 6 caracteres.
// • Deve conter pelo menos 1 número.
// • Deve conter pelo menos 1 letra.
// Repita o processo até que a senha seja válida.

// const readline = require(`readline-sync`);

// let senhaValida = false;

// while (!senhaValida) {
//   let senha = readline.question("Digite uma senha:");

//   let temTamanhoCerto = senha.length >= 6;
//   let temNumero = /[0-9]/.test(senha);
//   let temLetra = /[a-zA-Z]/.test(senha);

//   if (temTamanhoCerto && temNumero && temLetra) {
//     console.log("Senha válida!");
//     senhaValida = true;
//   } else {
//     console.log("Senha inválida!\nA senha precisa ter:\n- Pelo menos 6 caracteres\n- Pelo menos 1 número\n- Pelo menos 1 letra");
//   }
// }
const readline = require('readline-sync');

let validar = false;

while (!validar) {

    let senha = readline.question("Criar uma senha: ");
    let tamanho = senha.length >= 6;
    let numero = /[0-9]/.test(senha);
    let letra = /[a-zA-Z]/.test(senha);
    
    if (tamanho && numero && letra){
        console.log("Senha aceita!");
        validar = true;
        break;
    } else {
        console.log("Senha inválida!");
        console.log("Precisa ter pelo menos 6 caracteres.");
        console.log("Precisa ter pelo menos 1 numero.");
        console.log("Precisa ter pelo menos 1 letra.");
        console.log("Tente novamente: ");
    }
    
}