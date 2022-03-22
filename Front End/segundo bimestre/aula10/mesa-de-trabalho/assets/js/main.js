// Nomes: Felipe Lopes, Jose Sousa, Nicholas Ruas, Ruggiero Stello e Lucas Adrian


// 1. Selecione o formulário

var formulario = document.querySelector("#formularioDeCadastro");

var listaDeItens = document.querySelector(".c-lista__item");

// 2. Crie da rotina que será disparada a partir do evento de envio

formulario.addEventListener("submit", function (evento) {

    var novoItem = evento.target[0].value;

// 2.2. Remova todos os espaços vazios

    var itemSemEspaco = novoItem.replace(/\s/g, "");

// 2.1. Remova todos os números permitindo apenas texto

    var somenteLetras = itemSemEspaco.replace(/\d/g, "");

// 3. Capture o evento de envio do formulário e disparar a rotina

    listaDeItens.innerText = somenteLetras;

    evento.preventDefault();
    
});


