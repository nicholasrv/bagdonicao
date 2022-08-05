
// Parte I: Manipulando dados

// 1. Cria um base de dados em JSON
var json = '[{"id": 0,"tarefa": "Consumir o PlayGround da Digital House"},{"id": 1,"tarefa": "Não faltar as aulas"},{"id": 2,"tarefa": "Ter uma presença participativa e comunicativa na atividades"}]';

// 2. Converte JSON para Literal Object: Objeto Literal
var objetoLiteral = JSON.parse(json);

/*
    JSON: JavaScript Object Notation 

    - O uso de espas duplas para chave é obrigatória;
    - Não tem o recurso de armazenar funções;
    - Para o JavaScript é uma notação de texto.
*/
console.log( `JSON é uma ${typeof(json)} \n`, json);

/*
    Objeto Literal: Literal Object

    - Não necessita de aspas duplas na chave;
    - Permite o armazenamento de funções;
    - Para o JavaScript é uma notação de objeto;
    - É possível acessar propriedades e métodos do objeto literal.
*/
console.log( `Objeto Literal é um ${typeof(objetoLiteral)} \n`, objetoLiteral );

// 3. Acessar, criar e manipular dados de um objeto literal
// 3.1. Acessar propriedades do objeto literal.
console.log("tarefa 1 - ", objetoLiteral[0].tarefa);


// 3.2. Manipular valores de uma propriedade
objetoLiteral[0].tarefa = "Consumir o PG da DH";

console.log("tarefa 1 (atualizada) - ", objetoLiteral[0].tarefa);

// 3.3. Criar propriedade no objeto
objetoLiteral.cadastrarNomeCompletoDoUsuario = function (id, nome, sobrenome) {
    var nomeCompleto = `${nome} ${sobrenome}`;

    objetoLiteral[id].nomeCompleto = nomeCompleto;
}

// 3.4. Criar funções no objeto
objetoLiteral.cadastrarNomeCompletoDoUsuario(0, "Willian", "Sant Anna");

// Nota: É possível converter um objeto literal em JSON a partir do método stringfy().

var novoJson = JSON.stringify(objetoLiteral);

// Nota: A função cadastrarNomeCompletoDoUsuario() não existe no JSON por ser um método.
console.log('Novo JSON \n', novoJson);




// ---- 




// Parte II: Persistência de dados

// 1. Armazeno essas informações no localStorage para que ela não se perca 
// ao atualizar ou fechar a aba do navegador.
localStorage.setItem("App MinhasTarefas", novoJson);

// 2. Posso acessar essas informações sempre que eu precisar.
var jsonDoLocalStorage = localStorage.getItem("App MinhasTarefas");

console.log("JSON do LocalStorage \n", jsonDoLocalStorage);

/*
    Algumas outros recursos:

    localStorage.removeItem("App MinhasTarefas"); Irá apagar item do localStorage.
    localStorage.clear(); Irá apagar todos os itens do localStorage.

    Nota: Podemos separar o armazeno de dados no localStorage para dados 
    com uma permanência maior ou sessionStorage apenas enquanto ativa a aba 
    de navegação
*/

// Exemplo prático: 

var nomeDoUsuario = localStorage.getItem('Nome do Usuário');

if (nomeDoUsuario == null) {
    var nomeDoUsuario = prompt("Qual seu nome?");
    localStorage.setItem("Nome do Usuário", nomeDoUsuario);
}
else {
    var identificacaoDoUsuarioLogado = document.querySelector(".h1");
    identificacaoDoUsuarioLogado.innerText = nomeDoUsuario;
}

// localStorage.clear();
// localStorage.setItem("Nome do Usuário"); 
// localStorege.removeItem("Nome do Usuário");
// localStorage.getItem("Nome do Usuário"); 