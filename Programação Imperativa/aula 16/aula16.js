let bemVindo = () => 'Olá Mundo!';

let dobro = numero => numero * 2;

let soma = (a,b) => a + b;

console.log(bemVindo());
console.log(dobro(4));
console.log(soma(5,9));


let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' +
    data.getMinutes();
}

console.log(horaAtual())


//###################

setTimeout(function(){
    console.log ('oi eu sou o nicholas')
} , 1000);

/*setTimeout serve para invocar uma função anonima (callback - uma funcao dentro da outra) e definir um tempo para que a tarefa seja executada.
#####Este tempo é sempre medido/lido em milisegundos pelo Javascript. Lembrando que 1000 milisegundos = 1 segundo.######*/


setTimeout(function(){
    console.log ('oi eu sou o nicholas')
} , 1000);



// function nomeCompleto (nome,sobrenome) {
//     return nome + ' ' + sobrenome
// }

// console.log(nomeCompleto ("Nicholas", "Ruas Viegas"));



// function bomDia(nome, sobrenome, callback){
//     return 'Olá, ' + callback(nome,sobrenome)
// }

// console.log( bomDia("Nicholas", "Ruas Viegas", nomeCompleto + '!' ) );


///////////

function acaoCarro(callback) {
    return callback();
}

function andar() {
    console.log('carro Andando');
}

function parar() {
    console.log('carro parou');
}
acaoCarro(andar);
acaoCarro(parar);


///////////////

let fizzOrBuzz = () => {
    for (n = 1; n <= 100; n++) {
      let fizzBuzz = ''
      if (n % 3 == 0) fizzBuzz += 'Fizz'
      if (n % 5 == 0) fizzBuzz += 'Buzz'
      console.log(fizzBuzz || n)
    }
  }
  
  fizzOrBuzz()
  



