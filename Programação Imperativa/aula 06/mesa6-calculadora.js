function soma (x,y) {
    console.log ("-------------- Teste de Operações / Calculadora --------------")
    return x + y
}

function subtracao (x,y) {
    console.log ("-------------- Teste de Operações / Calculadora --------------")
    return x - y
}

function multiplicacao (x,y) {
    console.log ("-------------- Teste de Operações / Calculadora --------------")
    return x * y
}

function divisao (x,y) {
    console.log ("-------------- Teste de Operações / Calculadora --------------")
    return x / y
}

console.log(soma(2,5), subtracao(5,4))

console.log(multiplicacao(2,5))

console.log(divisao(10,2))

console.log(divisao(10,0))

function quadradoDoNumero (x) {
    return multiplicacao(x,x)
}

console.log(quadradoDoNumero(2))

function mediaDeTresNumeros (x,y,z) {
    return divisao(soma(soma(x,y),z),3)
}

console.log(mediaDeTresNumeros(2,2,2))

function calculaPorcentagem (x,y) {
    return multiplicacao(x,divisao(y,100))
}

console.log(calculaPorcentagem(160,25))

function geradorDePorcentagem (x,y) {
    return multiplicacao(divisao(x,y),100) 
}

console.log(geradorDePorcentagem(20,200))