
// Parte 1 - Captura de dados pelo objeto Location

var enderecoCompleto = location.href;
var parametros = location.search;
var rota = location.pathname;
var dominio = location.hostname;
var dominioCompleto = location.host;
var porta = location.port;
var protocolo = location.protocol;

console.log(`Protocolo: ${protocolo}`);
console.log(`Domínio: ${dominio}`);
console.log(`Porta: ${porta}`);
console.log(`Domínio completo: ${dominioCompleto}`);
console.log(`Rota da página: ${rota}`);
console.log(`Parametros: ${parametros}`);
console.log(`Endereço completo: ${enderecoCompleto}`);


// Parte 2 - Exemplo de captura e manipulação os valores dos parametros do endereço http.

// Captura dos parametros do endereço http.
var parametros = location.search;

// Cria um objeto para consulta de parametros.
var consulta = new URLSearchParams(parametros);

// Seleção do texto da página.
var elementHTML = document.querySelector('.texto');

// Armazeno o resultado das condicionais em variáveis para tornar o código mais legível.
// has vai retornar um booleano dizendo se o valor existe ou nao com true ou false

var existeParametroNome = consulta.has('nome');

// Se existe parametro nome...
// get retorna o valor em questao se ele existir
  
if(existeParametroNome) {
    
    // Captura o valor do parametro nome
    var valorDoParametroNome = consulta.get('nome');

    // Adiciona o valor do parametro nome em um nó de texto.
    var textoNomeDoUsuario = document.createTextNode(valorDoParametroNome);
    
    // Adiciona o nó de texto no elemento selecionado.
    elementHTML.appendChild(textoNomeDoUsuario);

} 
else {

    // Cria um nó de texto com texto padrão.
    var textoPadrao = document.createTextNode('aluno(a)');

    // Adiciona o nó de texto no elemento selecionado.
    elementHTML.appendChild(textoPadrao);
}