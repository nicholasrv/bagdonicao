
// Funções que se comunicam com o servidor.

const API_URL_FAKE = 'https://jsonplaceholder.typicode.com'; 

/**
* Realiza a requisição de todas as publicações.
*/
function pedirTodasAsPublicacoesService() {
    fetch(`${API_URL_FAKE}/posts`)
        .then(function(respostaDoServidor) { 
            return respostaDoServidor.json();
        })
        .then(function(respostaDoServidorEmJSON) {
            
            // Cria o elemento na DOM após a promessa ser concluída.
            criarItemsNaDOM(respostaDoServidorEmJSON)
        });
}

/**
* Realiza a requisição deletar publicação.
* @param {number} idDaPublicacao
*/
function removerPublicacaoService(idDaPublicacao) {
    console.log(`delatar o item ${idDaPublicacao}`);

    // fetch de delete do item...
}

/**
* Realiza a requisição editar publicação.
* @param {number} idDaPublicacao
*/
function editarPublicacaoService(idDaPublicacao) {
    console.log(`editar o item ${idDaPublicacao}`);

    // fetch de editar do item...
}


// Funções que modificam o DOM.

/**
 * Cria todos os elementos retornados da requisição na DOM.
 * @param {*} respostaDoServidor
 * @type { id: number, title: string, body: string } 
 */
function criarItemsNaDOM(respostaDoServidor) {

    // Varre o objeto e retorna item por item.
    respostaDoServidor.map(function(corpoDaPublicacao) {

        // Destruturação/Separação dos elementos do objeto
        let { id, title, body } = corpoDaPublicacao;

        // Guarda a id da publicacao.
        let idDaPublicacao = id;

        // Guarda o texto da publicação.
        let tituloDaPublicacao = title;

        // Guarda o corpo de texto publicação.
        let corpoDeTextoDaPublicacao = body;

        // Selecionar o item da DOM que será o elemento pai.
        let aplicativo = document.querySelector('.aplicativo');

        // Modelo HTML do cartao
        let componenteCartao = `
            <div class="cartao">
                <section class="cartao__corpo">
                    <h1 class="titulo">${tituloDaPublicacao}</h1>
                    <p class="descricao">${corpoDeTextoDaPublicacao}</p>
                    <div class="my">
                        <button 
                            class="botao__excluir" 
                            onclick="removerPublicacaoService(${idDaPublicacao})"
                        >
                            Excluir
                        </button>
                        <button 
                            class="botao__editar" 
                            onclick="editarPublicacaoService(${idDaPublicacao})"
                        >
                            Editar
                        </button>
                    </div>
                </section>
            </div>
        `

        // Adiciono a tarefa no elemento <div class="aplicativo">
        aplicativo.innerHTML += componenteCartao;
    });
}