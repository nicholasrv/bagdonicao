/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)

2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.


*/

function contaBancaria(numeroconta, tipoconta, saldoconta, titularconta){
    this.numeroconta = numeroconta
    this.tipoconta = tipoconta
    this.saldoconta = saldoconta
    this.titularconta = titularconta
}

let contabancaria = [];
contabancaria.push( new contaBancaria("456498723", "corrente", "126549", "Nicholas Ruas Viegas"));
contabancaria.push( new contaBancaria("156144984", "poupanca", "96485", "Guilherme Prado"));
contabancaria.push( new contaBancaria("654564898", "corrente", "57831", "Matheus dos Santos"));
contabancaria.push( new contaBancaria("231894985", "poupanca", "871945", "Paulo Freire"));

// let carroNovo = new Carro("Tesla", "x");
// let carroNovo1 = new Carro("Tesla", "3");

console.log(contabancaria);
