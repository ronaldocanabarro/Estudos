// > LAÇO NUMÉRICO: FOR

const input = require('readline-sync');

// O problema

const nota1 = Number(input.question('Informe a nota 1: '));
const nota2 = Number(input.question('Informe a nota 2: '));
const nota3 = Number(input.question('Informe a nota 3: '));

let media = (nota1 + nota2 + nota3) / 3

// Acumulador

let acumulador = 0;

acumulador += 10;   // acumulador = acumulador + 10

acumulador += 2;    // acumulador = acumulador + 2

acumulador++;       // incremento

console.log(acumulador);

console.clear();

// Estrutura for

for (let i = 0; i <= 10; i++) {
    console.log('Repetição', i);
};

for (let i = 10; i <= 12; i++) {
    console.log('Repetição', i);
};

for (let i = 12; i > 8; i--) {
    console.log('Repetição', i);
};

console.clear();

// Resolvendo o problema inicial

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `));

    soma = soma + nota;
};

console.log(`A média do aluno ${soma / 3}.`);

/*
O for em JavaScript é uma estrutura de repetição usada para executar um bloco de código várias vezes, de forma controlada. Ele é muito útil quando você sabe quantas vezes deseja repetir uma ação.

Estrutura básica do for

for (inicialização; condição; incremento) {
  // bloco de código a ser executado
}

1. Inicialização: geralmente usada para declarar e iniciar uma variável de controle (ex: let i = 0).
2. Condição: enquanto essa condição for verdadeira, o loop continuará executando.
3. Incremento: após cada execução do bloco, essa parte é executada (ex: i++, que é o mesmo que i = i + 1).
*/