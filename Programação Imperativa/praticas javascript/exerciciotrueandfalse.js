/*=======EXERCICIO 1======
==========================*/

let status = true;

if(status == true){
    console.log ('O valor é true')
}
else{
    console.log ('O valor é false')
}

/*=======EXERCICIO 2======
==========================*/

// let linguagem = 'Javascript'
// let linguagem = 'Python'
// let linguagem = 'HTML/CSS'
let linguagem = 'react'

if(linguagem == 'Javascript'){
    console.log('Estou aprendendo' + ' ' + linguagem)
}
// else if(linguagem == 'Python'){
//     console.log('Estou aprendendo' + ' ' + linguagem)
// }
// else if(linguagem == 'HTML/CSS'){
//     console.log('Estou aprendendo a criar sites em' + ' ' + linguagem)
// }
// else{
//     console.log('Aprenderei mais tarde')
// }


/*=======EXERCICIO 3 - PODE SUBIR======
==========================*/

function podeSubir(altura, acompanhada){
    if (altura >= 1.40 && altura < 2.00)
    {
        return("Acesso autorizado")
    }

    else if (altura < 1.40 && altura >= 1.20 && acompanhada)
    {
        return("Acesso autorizado somente com acompanhante")
    }

    else{
        return("Acesso negado")
    }
}

console.log(podeSubir(1.40))
console.log(podeSubir(2.00))
console.log(podeSubir(1.99))
console.log(podeSubir(1.39, true))
console.log(podeSubir(1.39, false))
console.log(podeSubir(1.19, true))


/*=======EXERCICIO 4 - IF TERNARIO E SWITCH ======
==========================*/

let dia = "quinta";

let resultado = dia == "domingo"? "Vou a praia": "Fico em casa estudando";

console.log(resultado);

//O if ternário só pode ser utilizado quando queremos indicar apenas uma condição, não funcionando com mais de uma.


switch(dia){
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta":
        console.log("Vou no cinema");
        break;
    case "quinta":
        console.log("Vou fazer arroz");
        break;
    default:
        console.log("Eu não vou fazer nada")

}

//O switch acaba deixando o código mais limpo, fluído e com uma estrutura mais fácil de ser visualizada que a if/else comum, portanto é de boa prática sempre tentarmos utilizar o switch.

