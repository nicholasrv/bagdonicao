/*#################                             ###################    
######################      METODOS DE STRINGS  ######################
#########################                       #########################*/


/*length*/
let texto = "Oi eu sou o nicholas";
console.log(texto.length);

//O length conta o número total de caracteres presentes em uma string. LEMBRANDO QUE TODA STRING COMEÇA NO CARACTERE 0 E NÃO 1.


/*IndexOf*/
console.log(texto.indexOf("o"));

//O IndexOf vai servir para eu buscar alguma letra ou trecho dentro da minha string.


/*slice*/
let palavra = texto.slice(0,3);
console.log(palavra);
console.log(texto);

// a estrutura do slice deve ser o intervalo de caracteres que eu quero tirar da string, lembrando que toda string começa do zero.
// Importante: O último caractere que eu mencionar não vai vir no slice. Vai vir um antes do que eu mencionar, SEMPRE.


/*trim*/
let arroz = "                 EU                    GOSTO             DE               ARROZ25185              ";
let ehbom = arroz.trim();
console.log(arroz);
console.log(ehbom);

//O trim serve para eliminarmos espaços no começo da string (nao serve para espaços que ficam no meio dela)


/*split*/
let jaja = "jajajajajaja basura";
let regala = jaja.split("b");
console.log(regala);

//O split transforma a string em um array, separando cada palavra que tiver na string como um valor para o novo array.
//Para que as palavras sejam devidamente separadas, precisamos colocar aspas e um espaço no meio, assim: -> " ".
//Caso utilizemos apenas as aspas sem o espaço no meio, ele vai separar cada caractere que tiver em toda a string, assim: -> ""


/*replace*/
let muymalo = "Carlos, el topo que gira!";
let basura = muymalo.replace("Carlos", "Homero");
console.log(basura);

// Com o replace podemos trocar alguma parte de nossa string com uma palavra e/ou caractere que desejarmos, passando dois parametros, assim ->: "O que vamos trocar", "Pelo que vamos trocar".


/*#################                             ###################    
######################      METODOS DE ARRAYS   ######################
#########################                       #########################*/



//.push() - Adiciona um ou mais elementos ao final do array

let nicao = ["Nicholas, Ruas", "Viegas"]

nicao.push("Teixeira");

console.log(nicao); // O retorno deste console.log será ["Nicholas", "Ruas", "Viegas", "Teixeira"].



//.pop() - Elimina o último elemento de um array. Não recebe parametro e retorna o elemento eliminado.

let nomeSobrenome = ["Nicholas, Ruas", "Viegas"]

// nomeSobrenome.pop(); // Usando o método desta forma, ele eliminará o ultimo elemento do array no console.log
let nomeEPrimeiroSobrenome = nomeSobrenome.pop() // Usando desta forma e armazenando o método em uma variável, ele retornará o elemento eliminado caso usemos o console.log.

console.log(nomeEPrimeiroSobrenome);



//.shift() - Elimina o primeiro elemento de um array. Não recebe parametro e retorna o elemento eliminado.

let pratos = ["Strogonoff", "Feijoada", "Parmegiana", "Lasanha"]

let segundoPrato = pratos.shift()

console.log(pratos);
console.log(segundoPrato);



//.unshift() - Adiciona um ou mais elementos ao início de um array. Recebe um ou mais elementos como parâmetro e retorna o novo comprimento do array.

let carros = ["bmw", "benz", "bentley", "lamborghini"]

carros.unshift("ferrari");
console.log(carros);

carros.unshift("hb20", "onix");
console.log(carros);



//.join() - Junta os elementos de um array usando um separador que especificamos. Se não o especificarmos, o JS usará as virgulas que colocamos entre cada elemento do array.

let aquarela = ['amarelo', 'azul', 'laranja', 'marrom', 'verde', 'vermelho', 'violeta', 'verde']

let separadaPorVirgula = aquarela.join();

let separadaPorBarra = aquarela.join(" / ")

let separadaPorTraço = aquarela.join(" - ")

console.log(separadaPorVirgula);
console.log(separadaPorBarra);
console.log(separadaPorTraço);



//.lastIndexOf() - A função deste método é similar ao IndexOf. A diferença é que este buscará o valor a partir do final do array (de trás para frente).

let vermelho = aquarela.lastIndexOf('vermelho');
console.log(vermelho);

let verde = aquarela.lastIndexOf('verde'); // Observação: Caso haja elementos repetidos, o método trará a posição do primeiro que ele achar - Nesse caso, a posição é 7.
console.log(verde);

let amora = aquarela.lastIndexOf('amora');
console.log(amora); // Assim como no IndexOf, caso ele não ache o valor buscado, retornará -1.



//.includes() - Também similar ao IndexOf, mas retornará um valor booleano. Caso ele encontre o valor buscado, retornará true. Caso não encontre, retornará false.

let temVerde = aquarela.includes('verde');
console.log(temVerde); // Retorna true pois existe o valor 'verde' na variavel.

let temAmora = aquarela.includes('amora');
console.log(temAmora); // Retorna false pois não existe o valor 'amora' na variavel.



///// EXERCICIO DE FIXACAO \\\\\

let numbers = [22, 33, 54, 66, 72]
console.log(numbers.length)

//Com o length conseguimos contar a quantidade de posicoes dentro do array, nesse caso, 5.


let grupoDeAmigos1 = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos1[1][2]);

//Declaramos varias arrays "filhotes" em um array "pai", dentro de uma variavel.
//Se acessarmos no console log a variavel com um colchete e uma posicao, estamos pedindo a impressao de um dos arrays filhotes no console.
//Abrindo um segundo colchete antes do fechamento do metodo, conseguimos determinar uma subposição e puxaremos o valor referente a esta no console.
//Neste caso, o array filhote 1 seria "Spider Man, Hulk, Ironman", pois a contagem do JS começa na posicao 0.
//Determinamos [1][2] nesse caso, portanto puxamos a terceira subposicao do primeiro array filhote, que é "Ironman".


let str = "uma string qualquer"
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]);

// o código acima retira o último valor da extensao total do array filhote 2, que no caso é a variavel str.



// 1. Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

function imprimirInverso (umArrayQualquer){

    return(umArrayQualquer.reverse());

}

console.log(imprimirInverso(['Nicholas', 'Ruas', 'Viegas']));

// 2. Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function inverter (umOutroArrayQualquer){
    let inverter = umOutroArrayQualquer.reverse();
    console.log(inverter);
}

inverter(['Eu', 'Gosto', 'De', 'Torta']);

// 3. Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

function somaDeArray (umArrayNumericoQualquer){
    let somarArrays = umArrayNumericoQualquer[0] + umArrayNumericoQualquer[1] + umArrayNumericoQualquer[2] + umArrayNumericoQualquer[3] + umArrayNumericoQualquer[4] + umArrayNumericoQualquer[5];
    console.log(somarArrays);
}

somaDeArray([9, 14, 29, 32, 74, 87]);


// 4. Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().

console.log('\n ----- Unindo palavras -----')

function somarPalavras(palavras){
    let palavraSomada =  palavras[0]
    for (let index = 1; index < palavras.length; index++) {
        palavraSomada += ' ' + palavras[index];
    }
    console.log(palavraSomada)
}

somarPalavras(['Arroz','Doce','Abobora','Feijão'])
somarPalavras(['Eu','Gosto','de','Pipoca'])



//############# SINTAXE BASICA CICLO FOR ###############//

for(let i = 0; i<=4; i++){
    console.log(i)
}


for(let volta = 1; volta<=5; volta++){
    console.log('Volta número ' + volta)
} 


//5. O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:


        // 1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries: "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 


        let colecaoDeFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
        console.log(colecaoDeFilmes[3]);

        //2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.

        function transformarEmMaiuscula(valor){
            return valor.toUpperCase();
        }

        console.log(transformarEmMaiuscula(colecaoDeFilmes[3]));

        //3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	    // "Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
        // Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

        let outraColecaoDeFilmes = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]
        console.log(outraColecaoDeFilmes[3]);


        function unirArrays(arr1, arr2){
            return arrayUnido = arr1.concat(arr2)
        }

        arrayUnido = unirArrays(colecaoDeFilmes, outraColecaoDeFilmes);
        console.log(arrayUnido);


        //4. Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. 
        // Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.

        let removido = arrayUnido.pop();
        console.log(removido);

        //5. Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
	    
       const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	   const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

       // Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.

    
        for (let index = 0; index < asiaScores.length; index++) {
        console.log(asiaScores[index] == euroScores[index] ? 'O valor '+asiaScores[index]+' é igual a ' + euroScores[index]  : 'O valor '+asiaScores[index]+' é difernte de ' + euroScores[index] )
    
        }

    //### ESTRUTURA BASICA/SINTAXE WHILE E DO WHILE ###

    // let volta = 3
    // while (volta <= 5){
    //     console.log('Volta número ' + volta);
    //     volta++
    // };

    // A estrutura do Do While vai ser bem similar, a diff principal é que independentemente da condicao colocada, a acao vai ser realizada pelo menos uma vez.

    let volta = 0
    do  {
        console.log('Volta número ' + volta);
        volta++
    } while (volta <= 5);


    contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador<=5);

// imprimindo somente os números pares

for (let i = 0; i <=100; i= i+2) {
    console.log("numero par == ", i);
}

//imprimindo somente os numeros impares

let nr = 0
while (nr <= 100) {
    if (nr % 2 != 0) {
        console.log("O número " + nr + " é ímpar.");
    }
    nr++;
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log("O número " + i + " é ímpar.");
    }
}

//// TABOADA DO 1 ATÉ O 10 /////

for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let resultado = 0;
        resultado = i * j;
        console.log(i + " x " + j + " = " + resultado);
    }
}

////



