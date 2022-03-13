/*
    Para desenvolvimento de um app Reativo, basicamente serão necessárias 
    três características fundamentais:

    1. Seleção do(s) elemento(s)
    2. Criação e manipulação de elemento(s)
    3. Criação e manipulação de atributo(s)
*/


// 1. Seleção de elemento(s)

var coordenadaLinhaUmColunaTres = document.querySelector(".coordenada#linha-1_coluna-3");

// 2. Criação e manipulação de elemento(s)
coordenadaLinhaUmColunaTres.innerText = "X";

// 3. Criação e manipulação de atributo(s)

// 3.1. Manipulação do atributo style
coordenadaLinhaUmColunaTres.style.backgroundColor = "orangered";
coordenadaLinhaUmColunaTres.style.color = "orange"

// 3.2. Manipulação de classes

// Realizei a seleção de outro item para facilitar a compreensão
var coordenadaLinhaDoisColunaUm = document.querySelector(".coordenada#linha-2_coluna-1");

// Manipulei o conteúdo de texto
coordenadaLinhaDoisColunaUm.innerText = "O"

// Adicionei a classe selecionado que possui cor de background e cor de texto azul
coordenadaLinhaDoisColunaUm.classList.add('selecionado');

/*

    Observação: Você pode verificar se uma classe existe
    utilizando o método classList.contains().
*/

var possuiClasseSelecionado = coordenadaLinhaDoisColunaUm.classList.contains("selecionado");

console.log("Possui a classe 'selecionado'?", possuiClasseSelecionado);
