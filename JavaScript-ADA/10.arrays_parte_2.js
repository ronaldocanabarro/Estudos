// > ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento: slice

console.log(arr1.slice(0, 2));
console.log(arr1.slice(2));

console.clear();

// Adicionando elementos: push (no final do array) | unshift (no início do array)

console.log('Antes de adicionar com push: ', arr2);

arr2.push(10, 20, 30);
arr2.push(40);

console.log('Depois de adicionar com push: ', arr2);


console.log('Antes de adicionar com unshift: ', arr2);

arr2.unshift(0);

console.log('Depois de adicionar com unshift: ', arr2);

console.clear();

// Removendo elementos: pop (remove o último elemento) | shift (remove o primeiro elemento)

console.log('Antes de remover com o pop: ', arr2);

const elementoRemovidoPop = arr2.pop();

console.log('Depois de remover com o pop: ', arr2);
console.log(`O elemento Removido foi ${elementoRemovidoPop}`);


console.log('Antes de remover com o shift: ', arr2);

const elementoRemovidoShift = arr2.shift();

console.log('Depois de remover com o shift: ', arr2);
console.log(`O elemento Removido foi ${elementoRemovidoShift}`);

console.clear();

// Concatenando arrays: concat

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34); // Quando o elemento não existe no array, retorna -1

console.log(indiceDoElemento34);

let arr3 = [1, 2, 3, 3, 5, 3];

console.log(arr3.indexOf(3));       // Retorna o primeiro elemento 3 do array
console.log(arr3.lastIndexOf(3));   // Retorna o último elemento 3 do array

console.clear();

// Descobrindo a existência de um elemento: includes (retorna Boolean)

console.log(arr1);

console.log(arr1.includes(10));
console.log(arr1.includes(45));

console.clear();

// Invertendo arrays: reverse

console.log('arr1 normal: ', arr1);

let arr1Invertido = arr1.reverse();

console.log(arr1Invertido);