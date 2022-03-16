
// Seleção do elemento
var documento = document.body;
var item = document.querySelector("#elemento");

// 1. Eventos do mouse...

// 1.1. Click
item.addEventListener("click", (evento) => evento.target.innerText = "Click" );

// 1.2. Doble click
item.addEventListener("dblclick", (evento) => evento.target.innerText = "Doble Click" );

// 1.3. Mouse over
item.addEventListener("mouseover", (evento) => evento.target.style.backgroundColor = "red");

// 1.4. Mouse out
item.addEventListener("mouseout", (evento) => evento.target.style.backgroundColor = "orangered");

// ---------------------------------------------------

// 2. Eventos do teclado...

// 2.1. Key Down
documento.addEventListener("keydown", () => item.innerText = "Key Down" );

// 2.2. Key Press
documento.addEventListener("keypress", () => item.innerText = "Key Press" );

// 2.1. Key Up
documento.addEventListener("keyup", () => item.innerText = "Key Up" );