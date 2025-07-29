// > COERÇÃO (CONVERSÃO) DE TIPOS

// - 1. Coerçãoconst Explícita (Manual)

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('1321314'));         // Usar geralmente Number
console.log(parseFloat('23224.234'));   // Converte para Float
console.log(parseInt('23224.234'));     // Converte para Inteiro
console.log(Boolean(1231231));          // Converte para Booleano - 0 = false, diferente de 0 = true

console.clear();

// - 2. Coerção Implícita (Automática)

console.log(10 + '1');                  // Concatena em string
console.log('10' - 1);                  // Converte pra numero
console.log(10 * '3');                  // Converte pra numero
console.log(10 - 'asasa');              // Retorna NaN (Not a Number)

// Outros exemplos

// Qual será a saída desse código?

// 1)
let n = 1 + '1';

n = n - 1;

console.log(n);                             // 10 numero

// 2)
console.log(2 + 3 + 4 + '5');               // 95 string

// 3)
console.log('5' + 2 + 3 + 4);               // 5234 string

// 4)
console.log('10' - '4' - '3' - 2 + '5');    // 15 string






