// Manipulacao de dados com JSON

var json = '{"nome": "Nicholas", "idade": 26}';

console.log(json);
console.log( `JSON é uma ${typeof(json)}` );

// JSON é Java Script Object Notation - 
// A ideia dele é ser usado como um tipo de extensao para ler dados e/ou objetos javascript como string e transferi-los para outras linguagens/plataformas.

var objetoLiteral = JSON.parse(json);

console.log(objetoLiteral);
console.log(`OBJETO LITERAL é um ${typeof(objetoLiteral)}`);

// JSON = informacoes compiladas em string;
// Objeto = informacoes compiladas em chaves (categorias) e keys (valores);

// É possível manipular os valores de uma chave acessando estes pelo metodo de sintaxe seguinte: nomeDoObjeto.nomeDaChave = valordesejado;

objetoLiteral.nome = "Paula Temple"
console.log(objetoLiteral.nome);

objetoLiteral.sobrenome = "Ruas"

objetoLiteral.nomeCompleto = function(nome, sobrenome){
    nome = this.nome;
    sobrenome = this.sobrenome;

    var nomeCompleto = `${nome} ${sobrenome}`;
}

objetoLiteral.nomeCompleto('Nicholas', 'Ruas Viegas')

console.log(objetoLiteral);

var novoJSON = JSON.stringify(objetoLiteral);

console.log(novoJSON);

// parse = metodo para converter JSON em Objeto
// stringify = metodo para converter Objeto em JSON/string.

var nomeDoUsuario = localStorage.getItem("Nome do Usuário");

if (nomeDoUsuario == null) {
    var nomeDoUsuario = prompt("Qual seu nome?");
    localStorage.setItem("Nome do Usuário", `${nomeDoUsuario}`);
}
else {
    var titulo = document.querySelector("#titulo");
    titulo.innerText = nomeDoUsuario;
}
// var nomeDoUsuario = prompt("Qual seu nome?");

