let nicholas = [1,2,3]

let dobro = nicholas.map(function(num){
    return num*2;
});

console.log(nicholas);
console.log(dobro); // Teremos 2,4,6, pois o metodo map realizará um loop no array de acordo com a funcao que estiver dentro dele, que no nosso caso é uma funcao de multiplicacao com um parametro que chamamos de "num", visto que os valores atribuidos ao nosso array sao numeros.
///////////////////// A ideia do metodo é mapear cada elemento presente no array e realizar um loop em sua totalidade de acordo com a funcao que estiver dentro dele.


/////

let idades = [15, 18, 24, 28, 32, 49];

let maiores = idades.filter(function(idade){
            return idade > 30; 
});

console.log(idades);
console.log(maiores);

/* O nome já auto-explica o método. Basicamente o que ele fará é receber uma função callback dentro dele que delimite uma condição para a filtragem e retorno dos valores de certo array.
*/

//Neste caso, criamos uma condicao de que somente idades maiores de 30 poderao aparecer no nosso retorno do console.log, dentro de um array com diversas idades diferentes dentro dele\\

////////////////////////////

let nomes = ['nicholas.r', 'uas.v', 'iegas'];

let concatenacao = nomes.reduce(

    function(acumulador, nome){
        return acumulador + nome;
    }
);

console.log(nomes);
console.log(concatenacao);


let parciais = [24, 36, 41, 49, 93, 150];

let total = parciais.reduce(

    function(acumulador, numeros){
        return acumulador + numeros;
    }
);

console.log(parciais);
console.log(total);

/// O reduce vai servir para reduzir um array retornando um valor só, acumulando os anteriores.


/////////////////////

let times = ['Santos', 'São Paulo', 'Palmeiras', 'Corinthians'];

times.forEach(
    function(time){
        console.log(time);
    })

///O método forEach vai servir para exibir cada elemento presente no array por meio de uma funcao callback, porém não vai retornar nada, portanto caso utilizemos o return ele vai devolver undefined.

//////////////////////
