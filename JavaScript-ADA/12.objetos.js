// > OBJETOS

// Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Walisson',
    idade: 26,
};

console.log(pessoa);

// Como acessar um par chave-valor?

console.log(pessoa.nome);
console.log(pessoa['nome']);    // forma alternativa de acessar a chave do objeto
console.log(pessoa.idade);

// Como adicionar um par chave-valor?

pessoa.altura = 1.77;
pessoa.idade = 27;              // Caso a chave já exista, ela substitui o valor da chave anterior

console.log(pessoa);

// Como remover um par chave-valor?

delete pessoa.altura;

console.log(pessoa);

// Como percorrer?

for (let chave in pessoa) {     // Diferente do array, em vez de percorrer os índices, percorre as chaves
    console.log(chave);
};