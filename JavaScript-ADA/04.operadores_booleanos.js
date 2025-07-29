// > OPERADORES BOOLEANOS

// Igualdade:            == (ou ===)
// Desigualdade:         != (ou !==)
// Maior que:            >
// Maior ou igual:       >=
// Menor que:            <
// Menor ou igual:       <=

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(numero == 10);      // true
console.log(numero == '10');    // true
console.log(numero === '10');   // false // Sempre procurar utilizar === para evitar bugs no código

console.clear()

console.log(10 != 10);          // false
console.log(10 != '10');        // false
console.log(10 !== '10');       // true // Sempre procurar utilizar !== para evitar bugs no código

// - Conjunções Logicas

// AND => &&

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log('Posso dirigir?', possoDirigir);

// OR => ||

idade = 16

const votoFacultativo = idade >= 16 && (idade < 18 || idade >= 70);

console.log('Meu voto é facultativo?', votoFacultativo);

// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso)