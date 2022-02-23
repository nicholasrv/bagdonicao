
/*
    1. Selecionar um objeto no DOM.
*/

window.alert("Módulo 2: Manipulando o DOM \nAula 03 - Introdução ao DOM");
window.console.log("O objeto window representa uma janela que contém um elemento DOM (documento).");

/* 
    Nota: A declaração do objeto window antes do método é dispensável, pois todos 
    os métodos do objeto são globais.

    Todos os métodos globais podem ser consultado na documentação da MDN Web Docs:
    https://developer.mozilla.org/pt-BR/docs/Web/API/Window
*/

// Este método seletor receber apenas o nome da ID do elemento DOM que deseja selecionar.
var primeiroItem = document.getElementById("primeiro");
// E retornar o elemento DOM.
console.log(primeiroItem); // retorna o elemento <div id="primeiro" class="item m-4"></div>

// Este seletor receber apenas o nome da ID e/ou Classe do elemento DOM que deseja selecionar.
var segundoItem = document.querySelector("#segundo");
// E retorna o elemento DOM.
console.log(segundoItem); // retorna o elemento <div id="segundo" class="item m-4"></div>

// Este seletor receber apenas o nome da ID e/ou Classe do elemento DOM que deseja selecionar.
var todosComClasseItem = document.querySelectorAll(".item");
// E retorna uma lista de elemento(s) DOM.
console.log(todosComClasseItem); // NodeList(3) [div#primeiro.item.m4, div#segundo.item.m4,div#terceiro.item.m4]

/* 
    2. Modificar os atributos do elemento selecionado.
*/

// A propriedade innerText retorna ou atribui um nó de texto ao elemento DOM.
primeiroItem.innerText = "Primeiro item";

// A propriedade innerHTML retorna ou atribui um nó HTML ao elemento DOM.
segundoItem.innerHTML = "<h1>Segundo item</h1>";

// Como o método seletor querySelectorAll retorna mais de um item, 
// precisamos informar o indece do elemento que desejamos manipular.
todosComClasseItem[2].innerText="Terceiro item";
