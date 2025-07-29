// > LAÇOS CONDICIONAIS

const input = require('readline-sync'); // Comando para importar a biblioteca readline-sync

// Função da biblioteca Math para gerar um número inteiro aleatório entre min (inclusive) e max (exclusive)
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const numero_sorteado = getRandomInt(0, 101);

let numero = Number(input.question('Qual numero voce escolhe? '));

while (numero !== numero_sorteado) {
    console.log('Voce errou o numero. Tente novamente...');

    Number(input.question('Qual numero voce escolhe? '));
}

console.log('Voce acertou!!!')