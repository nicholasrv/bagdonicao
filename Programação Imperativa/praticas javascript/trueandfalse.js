console.log(!true) // Se algo não é true, é false.
console.log(!false) // Se algo não é false, é true.
console.log(!!false) // Quando negamos duas vezes algo falso, estamos afirmando que algo é falso.
console.log(!!true) // Quando negamos duas vezes algo verdadeiro, acabamos afirmando que algo é verdadeiro.
console.log(!1) // 1 é true, então negando sua condição, teremos um retorno false.
console.log(!!1) // 1 é true, então negando duas vezes sua condição, estamos afirmando que é true.
console.log(!0) // 0 é false, então negando sua condição, teremos um retorno true.
console.log(!!0) // 0 é false, entao negando duas vezes sua condição, estamos afirmando que é false.
console.log(!!"") // string vazia é false, entao negando duas vezes sua condição, estamos afirmando que é false.

////

/*=======EXERCICIO 1======
==========================*/

let x = 5;
let y = 9;
console.log(x < 10 && x!==5); // ----- retornará false pois no operador AND (&&) os dois argumentos precisam ser verdadeiros para o retorno ser true.
//          é true    é false

console.log(x > 9 || x === 5); // ----- retornará true pois no operador OR (||) apenas um resultado verdadeiro já o suficiente para o retorno ser true.
//         é false    é true

console.log(!(x===y)); // ----- retornará true, pois com o operador ! , eu nego o resultado falso do argumento.
//            é false, pois apesar de ambas variaveis serem declaradas no tipo numero, uma é 5 e a outra é 9


////

/*=======EXERCICIO 2======
==========================*/

let x = 10
let y = "a"
console.log(y ==="b" || x >= 10) // ----- retornará true pois no operador OR (||) apenas um resultado verdadeiro já o suficiente para o retorno ser true.
//          é false      é true


/*=======EXERCICIO 3======
==========================*/

let x=3
let y=8
console.log (!(x == "3" || x === y) && !(y !== 8 && x <= y))
// Os resultados iniciais das operações internas serão: true, false, false, true.
// ao utilizarmos o operador "!", negamos o resultado dos argumentos, portanto tudo se inverterá do resultado original.
// o que é true virará false, e o que é false virará true.
// Logo, teremos os seguintes argumentos iniciais: false, true, true, false.
// Na primeira expressao, pelo operador ser OR e termos um argumento true, a mesma retornará resultado TRUE.
// Na segunda expressão, pelo operador ser AND e termos dois argumentos diferentes, a mesma retornará resultado FALSE.
// Logo, teremos a seguinte expressao final: TRUE && FALSE.
// Como o operador AND nao aceita dois resultados diferentes, será retornado FALSE.


/*=======EXERCICIO 4======
==========================*/

let str = ""
let msg = "haha!"
let eBonito = "false"
console.log (!((str || msg) && eBonito))
// string vazia é sempre false
// qualquer string com numero ou letra/palavra é true
// obs.: strings "false" são verdadeiras.
// Com essas regras, teremos os seguintes resultados iniciais: str = false; msg = true; eBonito = true.
// Na primeira expressão interna, como a expressao é OR e um dos valores (msg) é verdadeiro, o retorno será true.
// A variavel eBonito é verdadeira pois é uma string "false" e não tem valor lógico/de operação para O JS.
// Logo, temos aqui duas expressões com valores true.
// Tendo dois valores true e um operador AND (&&), o retorno será true.
// Por outro lado, inicialmente antes de abrirmos as duas expressões, temos um "!", que inverte o resultado final.
// Logo, nosso resultado final será false.
