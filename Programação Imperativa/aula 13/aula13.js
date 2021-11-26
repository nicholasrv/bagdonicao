/*==========                ============
============*****OBJETOS****============
============                ============
*/

let carro = {
    marca : "ford",
    modelo : "k",
    andar : function(){
        return "carro "+this.modelo+" andando";
    },
};//obejto literal 
console.log( carro );

let dadosCarro = {
    "cor":"vermelho",
    "marca":"ford",
    "placa":"XDC-785",
    "qtdPortas" :  4
}

console.log(dadosCarro.cor);

// function Carro(x, modelo){
//     this.marca = x;
//     this.modelo = modelo;
// }
// let carro = [];
// carro.push( new Carro("Tesla", "x") );
// carro.push( new Carro("Tesla", "1") );
// carro.push( new Carro("Tesla", "2") );

// let carroNovo = new Carro("Tesla", "x");
// let carroNovo1 = new Carro("Tesla", "3");

// console.log(carro);
// // console.log(carroNovo1);