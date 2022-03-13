
// 1. Selecionar o objeto

var coordenadaLinhaUmColunaUm = document.querySelector(".coordenada#linha-1_coluna-1");

// document.querySelectorAll(".coordenada");

// document.querySelector(".coordenada#linha-1_coluna-1")

// document.getElementsByClassName("coordenada");

// document.getElementById("linha-1_coluna-1");

// 2. Manipulação de conteúdo

coordenadaLinhaUmColunaUm.innerText = "X";
// coordenadaLinhaUmColunaUm.innerHTML = "<h1>o</h1>";

// 3. Manipulação de estilos

// background-color = backgroundColor
coordenadaLinhaUmColunaUm.style.backgroundColor = "orange";
coordenadaLinhaUmColunaUm.style.color = "blue";

// 4. Manipulação de atributos (class)

var coordenadaLinhaDoisColunaTres = document.querySelector(".coordenada#linha-2_coluna-3");

// Adicionei um texto ao elemento
coordenadaLinhaDoisColunaTres.innerText = "O";

// Adicionei uma ou mais classes ao elemento
coordenadaLinhaDoisColunaTres.classList.add("selecionado");

// Remover uma ou mais classes do elemento 
coordenadaLinhaDoisColunaTres.classList.remove("selecionado");

// Adicione ou Remove uma ou mais classes do elemento 

coordenadaLinhaDoisColunaTres.classList.toggle("selecionado");

coordenadaLinhaDoisColunaTres.classList.toggle("selecionado");