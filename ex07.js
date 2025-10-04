////07) Compare usuário e senha digitados com valores fixos. Se corretos, acesso
//liberado; senão, negado.

const readline = require(`readline-sync`)


const usuarioCorreto = "doceanny";
const senhaCorreta = "filha123";

let usuarioDigitado;
let senhaDigitada;

do {//não utilizar o parsefloat nessa situação de login e senha porque ele vira numero.
  usuarioDigitado = readline.question("Digite o usuario:");
  senhaDigitada = readline.question("Digite a senha:");

  if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Acesso liberado");
  } else {
    console.log("Acesso negado");
  }
                                           // ou
} while (usuarioDigitado !== usuarioCorreto || senhaDigitada !== senhaCorreta);
        // Se o nome estiver errado OU a senha estiver errada, continue perguntando.