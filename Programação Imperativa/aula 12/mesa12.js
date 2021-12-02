const alicia = [23, 69, 32]
const bob = [12,67,43]

let ganhador1 = 0;
let ganhador2 = 0;
let nomeGanhador = "";

function somaPontos(pessoa1, pessoa2){
  for(i = 0; i < pessoa1.length; i++){
  	if(pessoa1[i] > pessoa2[i]){
    	ganhador1++;
    }else if(pessoa2[i] > pessoa1[i]){
     	ganhador2++;
    }
  }

  encontraGanhador(ganhador1, ganhador2);
}

function encontraGanhador(ganhador1, ganhador2){
	if(ganhador1 > ganhador2){
  	    nomeGanhador = "Alicia"
    }else if(ganhador2 > ganhador1){
  	    nomeGanhador = "Bob"
    }else if(ganhador2 == ganhador1){
        nomeGanhador = "ninguém"
    }
}

somaPontos(alicia, bob);

console.log("O(a) ganhador(a) é " + nomeGanhador);