
// 1. Criar o elemento que desejos adicionar ao DOM
var botao = document.createElement("a");

// 2. Criamos o texto que iremos adicionar ao elemento
var botaoTexto = document.createTextNode("Ir para Google");

// 3. Adicionamos o texto ao elemento como um nó de texto
botao.appendChild(botaoTexto);

// 4. Adicionamos o elemento que contém um nó de texto no DOM
document.body.appendChild(botao);

// 5. Adicionamos atributo(s) e valores ao elemento
// Neste exemplo adicionaremos uma url de destino
botao.setAttribute("href", "https://www.google.com");

// 6. Podemos aproveitar e adicionar uma classe para estilizar o elemento
botao.classList.add("botao");

/*
    Obs.: Existem outros métodos auxiliares para manipulação de atributos:
    - hasAttribute() -> Retorna se um atributo existe (true) ou não (false) no elemento.
    - getAttribute() -> Retorna o valor do atributo.
    - removeAttribute() -> Remove o atributo.
    - setAttribute() -> Adiciona um atributo e seu respectivo valor desejado.
*/