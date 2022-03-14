////
//Aplicação template string para nomes 

let nome = 'Nicholas'

let meuTemplate = `Meu nome é ${nome}`;

console.log(meuTemplate);


//// 
//Aplicação template string para números e cálculos 

let templateCalculo = `4 * 8 é ${4 * 8}`;

console.log(templateCalculo);

////
// Aplicação template string para funções

function multiplicacao(num1, num2){
    return num1 * num2
}

let resultado = `O resultado é ${multiplicacao(5, 10)}`;

console.log(resultado);

////
//função com template string

function escreverHTML(titulo, texto) { 
    let body = document.getElementById('primeiraDiv');
    let templateString =`
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;
    body.innerHTML += templateString;
}

escreverHTML('Bom dia', 'Isto é um teste de template string em HTML');
escreverHTML('A boa parte é que dá dinamismo ao código', 'Pois economiza muitas linhas de repetição');
escreverHTML('Facilita muito a programação', 'pois podemos reutilizar tudo que escrevemos');
escreverHTML('Neste exemplo com uma função conseguimos escrever 4 vezes no HTML', 'Incrível, né?');

///////////////
//Texto de introdução a atividade: 
//Suponha que temos um objeto JavaScript com a seguinte estrutura, que precisamos usar para preencher dinamicamente o front end.

// let personagem = {
//     nome: "Michael",
//     sobrenome: "Scott",
//     nascimento: {
//        data: "15/04/1965",
//        cidade: "Scranton",
//        estado: "Pensilvânia"
//     },
//     imagemUrl : "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/MichaelScott.png/220px-MichaelScott.png",
//     trabalho: {
//        cargo: "manager regional",
//        empresa: "Dunder Mifflin"
//     }
//     };

document.getElementById('primeiraDiv').style.fontSize = '25px';
document.getElementById('primeiraDiv').style.color = 'red';
document.getElementById('primeiraDiv').style.textAlign = 'center';

// let listaDeCompras = document.querySelector('minhaDivDeLista')


/////REFAZENDO O CARRINHO DE COMPRAS DA MESA DA AULA 5 - 

let carrinhoDeCompras = document.getElementById('minhaListaDeCompras');
let lista = document.createElement('ul')
let lista_itens =['Arroz', 'Frango','Feijão', 'Suco', 'Queijo', 'Pão','Leite']


carrinhoDeCompras.appendChild(lista);
lista.classList.add('lista');

let ul = document.querySelector('.lista')

for (let i = 0; i < lista_itens.length; i++) {

    let itensDalista = document.createElement('li');
    itensDalista.innerText = lista_itens[i];
    itensDalista.classList.add('listaMercado');

    for(let linha = 0; linha < lista_itens; linha++) {

        itensDalista.innerText = texto[linha];
    }

    ul.appendChild(itensDalista); 

}






