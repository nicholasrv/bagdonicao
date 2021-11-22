//multiplicacao
function multiplicar(x , y){
    return x * y;
}

console.log (multiplicar(5,10));


//subtracao
function subtrair(x , y){
    return x - y;
}

console.log (subtrair(50,10));


//soma
function soma(x , y){
    return x + y;
}

console.log (soma(40,10));


//divisao
function divisao(x , y){
    return x / y;
}

console.log (divisao(40,10));


//conversao de polegadas em cm
function converter(polegadas){
    return polegadas * 2.54
}

console.log (converter(5));


//string em URL
function stringemURL(linkqueeuqueroconverter){
    return 'http://www.' + linkqueeuqueroconverter + '.com.br'
}

console.log (stringemURL('nicholas'));


//string para frase com exclamação
function stringcomexclamacao(frasequalquer){
    return frasequalquer + '!'
}

console.log (stringcomexclamacao('Taemy, eu te amo muito'));


//calcular idade dos cachorros
function idadecachorro(idadehumana){
    return idadehumana * 7
};

console.log (idadecachorro(26));


//calcular valor hora de trabalho com base em salario mensal
function valorhoratrabalho(salariomensal){
    return salariomensal / 160
};

console.log (valorhoratrabalho(4200));


//calculadora de IMC
function calculadoraIMC(peso,altura){
    altura = altura / 100;
    return (peso / (altura * altura));
};

console.log (calculadoraIMC(74, 177));

// Valores de referência nutricional:
// 
// Abaixo de 17        Muito abaixo do peso
// Entre 17 e 18,49    Abaixo do peso
// Entre 18,5 e 24,99  Peso normal
// Entre 25 e 29,99    Acima do peso
// Entre 30 e 34,99    Obesidade I
// Entre 35 e 39,99    Obesidade II


//string em minuscula para maiuscula
function minusculaparamaiuscula(){
    let str = 'Hello World!';
    console.log(str.toUpperCase());  // expected output: HELLO WORLD!;
    return
};

console.log (minusculaparamaiuscula());


//retornar tipo de dado
function indicartipodedado(x) {
    if(typeof(x) === 'string') {
      console.log('x is a string');
    } 
    
    else if(typeof(x) === 'number') {
      console.log('x is a number');
    }
  }

  console.log(indicartipodedado(10));
  console.log(indicartipodedado('nicolau'));


  //Math Pi
  let x = Math.PI;
  console.log(x);

///////////////

// CALCULADORA

///////////////

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

///////////////////////
