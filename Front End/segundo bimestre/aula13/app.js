
/*

    Revisão

    Na aula anterior...

    - Validações: RegEx (Expressões regulares), condicionais; 
    - Eventos de formulário: focus, change, blur, submit;

    Nesta aula...

    - Persistência de dados: localStorage e sessionStorage;
    - Manipulando dados: Objetos Literais, arquivos .json e convervendo dados;
    - Manipulando a navegação: Objeto location

*/


// - Validação: RegEx (Expressões regulates), condicionais;

var campo = document.querySelector('.c-form__campo');

function estaVazio(valorDoCampo) {

    var valorVazio = '';

    var respostaDaValidacao = valorDoCampo === valorVazio;

    return respostaDaValidacao;
}

function possuiMaisDeDezCaracteres(valorDoCampo) {
    
    var numeroDeCaracteresDoCampoValor = valorDoCampo.length;
    var limiteDeCaracteres = 10;

    var respostaDaValidacao = numeroDeCaracteresDoCampoValor > limiteDeCaracteres;

    return respostaDaValidacao;
}

function possuiCaracteresEspeciais(valorDoCampo) {

    var expressaoRegular = /\W/g;

    var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

    return respostaDaValidacao;
}

function possuiNumeros(valorDoCampo) {

    var expressaoRegular = /\d/g;

    var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

    return respostaDaValidacao;

}

// - Eventos de formulário: focus, change, blur

campo.addEventListener('change', function(evento) {

    // 1. Valor do campo item
    var valorCampoItem = evento.target.value.trim();

    // 2. Elemento que desejo modificar    
    var botao = document.querySelector('.c-form__botao');
    
    // 3. Condicionais
    // 3.1. Valor do campo está vazio
    var campoEstaVazio = estaVazio(valorCampoItem);
    // 3.2. Valor do campo possui mais de dez caracteres
    var campoPossuiMaisDeDezCaracteres = possuiMaisDeDezCaracteres(valorCampoItem);
    // 3.3. Valor do campo possui caracter especial
    var campoPossuiCaracteresEspeciais = possuiCaracteresEspeciais(valorCampoItem);
    // 3.4. Valor do campo possui números
    var campoPossuiNumeros = possuiNumeros(valorCampoItem);
    

    if(campoEstaVazio) {
        botao.setAttribute("disabled", '');
        console.log('Campo está vazio!');
    }
    else if(campoPossuiMaisDeDezCaracteres) {
        botao.setAttribute("disabled",  '');
        console.log('O campo ultrapassou o limite de caracteres');
    }
    else if(campoPossuiNumeros) {
        botao.setAttribute("disabled",  '');
        console.log('O campo não permite o uso de números');
    }
    else if(campoPossuiCaracteresEspeciais) {
        botao.setAttribute("disabled", '');
        console.log('O campo não permite o uso de caracteres especiais');
    }
    else {
        botao.removeAttribute("disabled");
    }
    
});

// Revisão da aula de hoje...

// - Eventos de formulário: submit;

// 1. Captura o formulário.
var formulario = document.forms['formularioDeCadastro'];

// 2. Armazena todas as tarefas.
var listaDeTarefas = [];

function listarTodasAsTarefas() {
    
    // Captura a lista.
    var lista = document.querySelector('.c-lista');

    // Apaga todos os elemento da lista.
    lista.innerHTML = '';

    // Mapeia todos valores da lista e cria um elemento <li> para cada uma das tarefas.
    
    // Importante: O map no momento que varre o valor de um array, ele cria outro com os valores inputados, mas nao apaga o que ja havia sido armazenado na variavel.
    // Ja o for each, apaga o que tinha antes e inputa novos valores na mesma variavel.
    // Como nesse caso nao queremos substituir o valor original do array vazio listadetarefas, mas sim criar um novo a cada input em nossa lista, utilizaremos o map.

    listaDeTarefas.map(valorDoItem => {
        
        // Criar um novo elemento <li> na lista <ul class="c-lista">.
        var novoItem = document.createElement('li');
        
        // Cria um nó de texto com o valor do campo digitado pelo usuário.
        var valorDoNovoItem = document.createTextNode(valorDoItem);

        // Adicionar a classe .c-lista__item e .u-my no novo elemento <li> criando anteriormente.
        novoItem.classList.add('c-lista__item');
        novoItem.classList.add('u-my');

        // Adiciona o nó de texto no novo elemento <li> criado anteriormente.
        novoItem.appendChild(valorDoNovoItem);

        // Adiciona o novo item na lista.
        lista.appendChild(novoItem);

        // sintaxe do AppendChild: elementoPaiQueEuVouUsar.appendChild(elementoFilhoQueEuQuiserVincular)
        
    });

}

// 3. Capturamos o evento de envio do formulário.
formulario.addEventListener('submit', function(evento) {

    // 3.1. Nesse primeiro momento não enviaremos o formulário,
    // Por esse motivo estou cancelando o envio/evento submit.
    evento.preventDefault();

    // 3.2. Captura o valor da tarefa adicionada pelo usuário.
    var descricaoDaTarefa = evento.target['item'].value.trim();

    // 3.3. Adiciona a tarefa na lista.
    listaDeTarefas.push(descricaoDaTarefa);

    // 3.4. Lista novamente todos as tarefas na lista.
    listarTodasAsTarefas();

    
});