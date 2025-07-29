// > ESTRUTURAS CONDICIONAIS

const idade = 20;

if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

console.clear();     // Limpando as saídas anteriores

// Se media >= 7, Aprovado
// Se media < 7 e media >= 5, Recuperação
// Se media < 5, Reprovado

let media = 4.9;

if (media >= 7) {
    console.log('Aprovado(a)');
} else if (media >= 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado(a)');
}