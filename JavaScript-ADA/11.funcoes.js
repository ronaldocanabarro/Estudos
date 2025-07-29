// > FUNÇÕES

// Definindo a função
function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript!');
};

saudacao();

console.clear();

// Como enviar parâmetros para as funções

function saudacao(nome, curso = 'JavaScript') {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso de ${curso}!`);
};

saudacao('Walisson');

console.clear();

// Retorno da função

function soma(numero1, numero2) {
    return numero1 + numero2;       // return encerra a função!
    console.log('Qualquer coisa');  // essa linha nunca será executada, pois está após o return.
};

let resultado = soma(10, 20);

console.log(resultado / 2);

console.clear();

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true;
    };

    return false;
};