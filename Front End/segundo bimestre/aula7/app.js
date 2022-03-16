
// 1. Selecionando os elementos botão e campo
var botao = document.querySelector(".botao");
var campo = document.querySelector(".campo");

// 2. Criar funções 
function adicionarOuRemoverAtributoDisabled() {
    
    // Selecionei os valores do input
    var valorDoCampo = campo.value;
    // Criei uma variável apenas para facilitar a compreensão do algorítimo
    var valorVazio = "";
    
    // Se o campo estiver vazio...
    if(valorDoCampo == valorVazio) {
        // Adiciona o atributo disabled que desabilita o botão
        botao.setAttribute("disabled", true);
    }
    // Caso contrário...
    else {
        // Remove o atributo disabled
        botao.removeAttribute("disabled");
    }
}

// 3. Utilizando eventos para criar interações

// Opção 1:
campo.addEventListener("change", adicionarOuRemoverAtributoDisabled);

// Opção 2: 
campo.onchange = adicionarOuRemoverAtributoDisabled;

// Opção 3: No HTML

// <input onchange="adicionarOuRemoverAtributoDisabled">


/*
    Link da documentação:
    https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
*/