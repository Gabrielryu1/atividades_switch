const ler = require('readline-sync');

let pesohumano = ler.questionFloat("Digite seu peso: ");

console.log("Escolha uma das alternativas 1-Mercurio , 2- Vênus , 3- Marte , 4- Júpiter , 5 - Saturno , 6- Urano ");
let escolha = ler.questionInt();  
let pesofinal = pesohumano;

switch (escolha) {  
    case 1:
        pesofinal = pesohumano * 0.37;
        console.log(`Seu peso em Mercúrio é ${pesofinal}`);
        break;
    case 2:
        pesofinal = pesohumano * 0.88;
        console.log(`Seu peso em Vênus é ${pesofinal}`);
        break;
    case 3:
        pesofinal = pesohumano * 0.38;
        console.log(`Seu peso em Marte é ${pesofinal}`);
        break;
    case 4:
        pesofinal = pesohumano * 2.64;
        console.log(`Seu peso em Júpiter é ${pesofinal}`);
        break;
    case 5:
        pesofinal = pesohumano * 1.15;
        console.log(`Seu peso em Saturno é ${pesofinal}`);
        break;
    case 6:
        pesofinal = pesohumano * 1.17;
        console.log(`Seu peso em Urano é ${pesofinal}`);
        break;
    default:
        console.log("Coloque uma das alternativas");
        break;
}
