// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let Pares = [2, 4, 6, 8, 10];

let Impares = Pares.map(function(valor, index){
    return valor + 1
});

console.log(Impares);


// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let Nomes = ['Maria', 'Jose', 'Joao', 'Darcia', 'Carla', 'Maria', 'Eduardo'];

let FiltroNomes = Nomes.filter(function(valor){
  return valor == 'Maria';
});

console.log(FiltroNomes);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Formatados = Numeros.reduce(function(acumulador, valor){
    return acumulador + ' - ' + valor;
})
console.log(Formatados);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
let Animais = ['Cachorro', 'Gato', 'Papagaio', 'Macaco', 'Leão', 'Tartaruga'];

Animais.forEach(function(animal){
    console.log('O animal é ' + animal);
})

//###############################################
//##################  PARTE 2 ##################
//##################          #################

// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma
// de toda a matriz, usando map() e reduce().

let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Soma = Numeros.reduce((acumulador, valor) => {return acumulador + valor});

//console.log(Soma);

let NovoArray = Numeros.map((valor, index) => {return index / Soma});

console.log(NovoArray);

// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais 
//do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let Palavras = ['Carro', 'Boneca', 'Televisão', 'Notebook'];

let PalavrasMaior = Palavras.filter((palavras) => {return palavras.length > 5})

console.log(PalavrasMaior);

// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam 
//o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. 

let Alunos = [{Nome: 'Maria', Nota: 7.5}, {Nome: 'Carlos', Nota: 8}, {Nome: 'João', Nota: 5}];

console.log(Alunos.sort((a, b) => {return a.Nome - b.Nome}));
console.log(Alunos.sort((a, b) => {return a.Nota - b.Nota}));
