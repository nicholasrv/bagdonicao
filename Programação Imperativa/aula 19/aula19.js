// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas.
//  Faça um programa que calcule e escreva:

// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

function maiorAltura(pessoas) {
    pessoas.sort(function(a, b) {
        return b.altura - a.altura;
    });

    return pessoas[0].altura;
}

function menorAltura(pessoas) {
    pessoas.sort(function(a, b) {
        return a.altura - b.altura;
    });

    return pessoas[0].altura;
}

function mediaMulheres(pessoas) {
    let quantidadeMulheres = 0;
    let somaAltura = 0;
    for (i=0; i< pessoas.length; i++) {
        if (pessoas[i].sexo==="F"){
            somaAltura += pessoas[i].altura 
            quantidadeMulheres++
        }
    }
    return somaAltura / quantidadeMulheres;


}

function quantidadeHomens(pessoas) {
    let quantidadeHomens = 0;
    let somaAltura = 0;
    for (i=0; i< pessoas.length; i++) {
        if (pessoas[i].sexo==="M"){
            somaAltura += pessoas[i].altura 
            quantidadeHomens++
        }
    }
    return quantidadeHomens;


}


const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.61
    },
    {

        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.75
    },
    {

        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.55
    },
    {

        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.67
    },
    {

        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.75
    },
    {

        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.88
    },
    {

        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.67
    },
    {

        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.63
    },
    {

        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.92
    },
    {

        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.80
    }
  ]
  
console.log(maiorAltura(arquivos));
console.log(menorAltura(arquivos));
console.log(mediaMulheres(arquivos));
console.log(quantidadeHomens(arquivos));


let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}

espectadores.push(new Espectador(17,'ótimo'));
espectadores.push(new Espectador(13,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(18,'ótimo'));
espectadores.push(new Espectador(22,'bom'));
espectadores.push(new Espectador(34,'ótimo'));
espectadores.push(new Espectador(50,'regular'));
espectadores.push(new Espectador(25,'bom'));
espectadores.push(new Espectador(30,'ótimo'));
espectadores.push(new Espectador(14,'regular'));
espectadores.push(new Espectador(21,'ótimo'));
espectadores.push(new Espectador(20,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(22,'ótimo'));
espectadores.push(new Espectador(23,'bom'));

