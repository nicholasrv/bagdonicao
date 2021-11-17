//Coleções de filmes

//1 - e nos pediram para passar todos os elementos para letras maiúsculas, o que
//na época tínhamos feito de forma &quot;manual&quot;. Vamos movê-lo para uma maneira mais
//automática usando loops.
function converterMaiusculo(arrayEntrada){
    for(let i = 0; i < arrayEntrada.length; i++){
        arrayEntrada[i] = arrayEntrada[i].toUpperCase()
    }
    return arrayEntrada;
}

let arrayFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
console.log(converterMaiusculo(arrayFilmes));


//Criação de outra estrutura
//2 - Agora precisamos modificar afunçãode passagemde elemento() que nos permite
//adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original
let novosFilmes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function concatArray(arrayEntrada, arrayConcat){
    for (let i = 0; i < arrayConcat.length; i++){
        arrayEntrada.push(arrayConcat[i].toUpperCase());
    }
    return arrayEntrada;
}

console.log(concatArray(arrayFilmes, novosFilmes));

//3- Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar
//para modificar o anterior, lembre-se que tivemos um infiltrado dentro de
//nossos filmes de animação que tivemos que tirar e salvar em outra variável
//antes de fazer a passagem de elementos de um array para outro!
function concatArray2(arrayEntrada, arrayConcat){
    ultimoItem = arrayConcat.pop();
    for (let i = 0; i < arrayConcat.length; i++){
        arrayEntrada.push(arrayConcat[i].toUpperCase());
    }
    return arrayEntrada;
}

let ultimoItem = '';
console.log(concatArray2(arrayFilmes, novosFilmes));

//4 - Finalmente, devemos modificar nossa função comparadora para os filmes
// como temos feito até agora.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
    let comparacionesAsiaEuropa = []
    for (let i = 0; i < asia.length; i++){
       comparacionesAsiaEuropa[i] = asia[i] == europa[i] ? 'Igual' : 'Diferente';
    }
    return comparacionesAsiaEuropa; 
}

console.log(compararCalificaciones(asiaScores, euroScores));

//Bônus

// Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de
// um concurso que foi realizado no fim de semana.
// Para isso, precisaremos seguir as seguintes instruções e informações para poder
// desenvolver nosso aplicativo.
// Cada participante tem 5 notas, dos quais suas pontuações individuais serão
// formadas, os participantes com suas respectivas pontuações são:

// 1- Determine qual seria a maneira ideal de representar cada participante com
// suas pontuações.
const Participante_A = [5, 8, 4, 9, 5];
const Participante_B = [8, 7, 8, 6, 8];
const Participante_C = [7, 5, 10, 8, 3];

// 2- Crie uma função pontuacaoMedia à qual receba um participante por parâmetro
// e deve calcular e devolver a pontuação média dele.
function pontuacaoMedia(arrayEntrada){
    let soma = 0;
    for (let i = 0; i < arrayEntrada.length; i++){
        soma += arrayEntrada[i];
    }
    return soma / arrayEntrada.length; //Aqui divido o valor somado com a quantidade de pontos

}
console.log("Notas dos concurseiros:");
console.log("Participante A: " + Participante_A);
console.log("Participante B: " + Participante_B);
console.log("Participante C: " + Participante_C);

console.log("Média de Notas do Participante A: " + pontuacaoMedia(Participante_A));
console.log("Média de Notas do Participante B: " + pontuacaoMedia(Participante_B));
console.log("Média de Notas do Participante C: " + pontuacaoMedia(Participante_C));

// 3- Crie uma função pontuacaoMaior que receba um participante por parâmetro e
// deve calcular e devolver a pontuação mais alta que o participante tem.
function pontuacaoMaior(arrayEntrada){
    let maiorPont = 0;
    for (let i = 0; i < arrayEntrada.length; i++){
        maiorPont = maiorPont < arrayEntrada[i] ? arrayEntrada[i] : maiorPont;
    }
    return maiorPont;
}

console.log("Maior pontuação do Participante A: " + pontuacaoMaior(Participante_A));
console.log("Maior pontuação do Participante B: " + pontuacaoMaior(Participante_B));
console.log("Maior pontuação do Participante C: " + pontuacaoMaior(Participante_C));


// 4 - Logo nosso líder tecnológico nos pede para criar essas duas funções geramos
// uma nova funcionalidade chamada competição que receberá os 3 participantes
// por parâmetros, e executará as duas funções criadas anteriormente para
// calcular as médias e pontuações mais altas de cada uma, e deve anunciar
// (mostrar pelo console) o vencedor de cada modalidade de pontuação.

function competicao(arrayA, arrayB, arrayC){
    let mediaA = pontuacaoMedia(arrayA);
    let mediaB = pontuacaoMedia(arrayB);
    let mediaC = pontuacaoMedia(arrayC);
    if (mediaA > mediaB) {
        if (mediaA > mediaC) {
            console.log("Participante A tem a maior média: " + mediaA);
        } else {
            console.log("Participante C tem a maior média: " + mediaC);
        } 
    } else if(mediaB > mediaC){
            console.log("Participante B tem a maior média: " + mediaB);
        } else {
            console.log("Participante C tem a maior média: " + mediaC);
        }

    let maiorA = pontuacaoMaior(arrayA);
    let maiorB = pontuacaoMaior(arrayB);
    let maiorC = pontuacaoMaior(arrayC);
    if (maiorA > maiorB) {
        if (maiorA > maiorC) {
            console.log("Participante A tem a maior pontuação: " + maiorA);
        } else {
            console.log("Participante C tem a maior pontuação: " + maiorC);
        } 
    } else if(maiorB > maiorC){
            console.log("Participante B tem a maior pontuação: " + maiorB);
        } else {
            console.log("Participante C tem a maior pontuação: " + maiorC);
        } 
    return "";   
}

console.log("Qual participante tem a maior Média e qual tem a maior pontuação?");
console.log(competicao(Participante_A, Participante_B, Participante_C));

///

let alice = [23, 82, 46];
let bob = [45, 8, 32];

function econtrarVencedor(array1, array2) {
    let comediante1 = 0;
    let comediante2 = 0;
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] > array2[i]) {
            comediante1 ++;
            console.log(comediante1);
        } else if(array1[i] < array2[i]) {
            comediante2 ++;
            console.log(comediante2);
        }
    }
    if (comediante1 > comediante2) {
        return console.log("Comediante 1 é o(a) vencedor(a)!!");
    } else if (comediante1 < comediante2) {
    return console.log("Comediante 2 é o(a) vencedor(a)!!");
    } else {
        return console.log("Ninguém venceu, houve um empate!");
    }
}

econtrarVencedor(alice, bob);
