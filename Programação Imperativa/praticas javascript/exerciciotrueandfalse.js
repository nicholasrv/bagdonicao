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


/*=======EXERCICIO 3 - IF TERNARIO E SWITCH======
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

