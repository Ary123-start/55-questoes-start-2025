// switch  case 

 const readline = require('readline-sync');

let local = Number(readline.question("Para onde voce quer ir?\n1 - Cinema\n2 - Quarto\n3 - Sala\nQualquer tecla - Lugar Nenhum\n"));

switch (local) {
    case 1:
        console.log("Entrou no cinema!");
        break;
    case 2:
        console.log("Entrou no meu quarto!");
        break;
    case 3:
        console.log("Entrou na minha sala!");
        break;
    default:
        console.log("Entrou em lugar nenhum!");
        break;
}