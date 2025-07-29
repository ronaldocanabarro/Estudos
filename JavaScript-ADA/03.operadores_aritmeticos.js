// > OPERADORES ARITMÉTICOS

let primeiroNumero = 20;
let segundoNumero = 2;

// Adição:               +
// Subtração:            -
// Multiplicação:        *
// Divisão:              /
// Exponenciação:        **
// Resto da divisão:     %

const soma = primeiroNumero + segundoNumero

console.log("Soma =", soma);
console.log("Subtração =", primeiroNumero - segundoNumero);
console.log("Multiplicação =", primeiroNumero * segundoNumero);
console.log("Divisão =", primeiroNumero / segundoNumero);
console.log("Exponenciação =", primeiroNumero ** segundoNumero);
console.log("Resto da divisão =", primeiroNumero % 3);

// Precedência de operadores

console.log((3 + 7) * 3);
console.log((10 + 7 + 8) / 3);

// Biblioteca Math (nativa no JS)

console.log(Math.PI);
console.log(Math.sqrt(16));