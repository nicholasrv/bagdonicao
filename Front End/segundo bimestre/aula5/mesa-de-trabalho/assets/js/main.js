// var todosOsItens = document.querySelectorAll(".lista__item");

// todosOsItens[0].classList.add('removido');
// todosOsItens[3].classList.add('removido');
// todosOsItens[4].classList.add('removido');
// todosOsItens[1].classList.add('selecionado');
// todosOsItens[2].classList.add('selecionado');

// var itemRemovido = document.querySelector('.removido')

// itemRemovido.innerText += '- removido'

// // itemRemovido.todosOsItens [0,3,4].innerText += '- removido'

// todosOsItens.forEach(callback todosOsItens('carro', 'celular', 'carregador'[index = 3 [0,3,4]])['  - removido'])))

// // Nomes grupo: Victoria Dias, Jose Sousa, Nicholas Viegas, Dario Olah, Lucas Adrian, Felipe Lopes

///////////////////////////////////////////////////////////

let carrinho = document.getElementById('carrinho');
let lista = document.createElement('ul');

let lista_texto = ['Carro', 'Bike', 'Patinete', 'Celular', 'Carregador'];

carrinho.appendChild(lista);
lista.classList.add('lista');

let ul = document.querySelector('.lista')

for (let i = 0; i < lista_texto.length; i++) {

    let item_lista = document.createElement('li');
    item_lista.innerText = lista_texto[i];
    item_lista.classList.add('lista__item');

    for(let linha = 0; linha < lista_texto; linha++) {

        item_lista.innerText = texto[linha];
    }

    ul.appendChild(item_lista); 

}

//TODO: ----------------------------------------------------------------

let lista_1 = document.querySelectorAll('.lista__item')
lista_1[0].classList.add('removido')
lista_1[0].innerText = 'Carro - Removido'

// ----

lista_1[1].classList.add('selecionado')
lista_1[1].innerText = 'Bike - Selecionado'

// ----

lista_1[2].classList.add('selecionado')
lista_1[2].innerText = 'Patinete - Selecionado'

// ----

lista_1[3].classList.add('removido')
lista_1[3].innerText = 'Celular - Removido'

// ----

lista_1[4].classList.add('removido')
lista_1[4].innerText = 'Carregador - Removido'