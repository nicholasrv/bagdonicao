
class Alerta extends HTMLElement {

    // Toda implementação será auto-executada no contrutor da classe.
    
    constructor() {
        super();

        // Corpo do Web Component.
        const container = this.attachShadow({ mode: 'closed' });

        // Manipulando o DOM.
        const alerta = document.createElement('p');
        
        // Corpo de texto.
        alerta.textContent = this.textContent;

        // Adicionando a classe .c-alerta no componente.
        alerta.classList.add('c-alerta');

        // Criando o elemento DOM <style>
        const estiloCSS = document.createElement('style');

        // Personalizando o componente.
        estiloCSS.textContent = `
            .c-alerta {
                background-color: red;
                border-radius: .5rem;
                color: white;
                font-family: sans-serif;
                padding: 1rem 1.5rem;
            }
        `;

        // Adicionei o estilo ao corpo do Web Component.
        container.appendChild(estiloCSS);
        // Adicionei o componente ao corpo do Web Component.
        container.appendChild(alerta);

    }
    
}

module.exports = Alerta;