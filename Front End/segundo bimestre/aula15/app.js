 /*

    API Interface de Programação de Aplicativos

    Se desenvolvida de acordo com o padrão de Arquitetura Serviços REST,
    seguirá quatro pilares:

        1. Irá separar a aplicação em duas partes, sendo elas cliente e servidor;

        2. Irá centralizar todos os recursos em rotas
            
            - Cara recurso irá gerenciar suas funcionalidades

                - Create / Criar
                - Read / Ler, Buscar
                - Update / Atualizar
                - Delete / Deletar

        3. Aplicação será Stateless, ou seja, "Sem estado"
                
            - O servidor não armazenará quaisquer dados sobre as requisições realizadas 
              pelo cliente, em outras palavras, se a rota necessitar de autenticação, 
              a cara requisição será enviado, junto ao pedido, dados que comprovam 
              a autorização de acesso ao recurso;

        4. Informação cacheada
                
            - A cada requisição o servidor fica responsável por retornar, 
              se existe a necessidade de realizar o download de todos os dados
              novamente. Assim o cliente poderá persistir os dados armazenados
              na memória em cache ou arquivos temporários.

*/

// Endpoint ou Recurso da API.
var recurso = 'https://jsonplaceholder.typicode.com/photos/1';

// Requisição de dados do Recurso.
var requisicaoDoClienteComFetch = fetch(recurso)
    .then(respostaDoServidor => {

        // Primeira resposta do servidor. 
        console.log(respostaDoServidor);

        // Retornando a promessa de resultado da resposta no formato JSON.
        return respostaDoServidor.json();
    })
    .then(respostaDoServidorEmJSON => {
    
        // Resposta do resultado da resposta no formato JSON.
        console.log('fetch', respostaDoServidorEmJSON);

        var enderecoDaImagem = respostaDoServidorEmJSON.thumbnailUrl;
        var descricaoDaImagem = respostaDoServidorEmJSON.title;

        // Cria imagem e adiciona no album.
        criarImagemAdicionarNoAlbum(enderecoDaImagem, descricaoDaImagem);
    }); 

function criarImagemAdicionarNoAlbum(enderecoDaImagem, descricaoDaImagem) {

    // Seleciona o album <div class="l-album">.
    var albumHTML = document.querySelector('.l-album');
    
    // Cria o elemento <img>.
    var imagemHTML = document.createElement('img');

    // Adicione atributo src="" e adiciona o endereço a imagem.
    imagemHTML.setAttribute('src', enderecoDaImagem);

    // Adiciona atributo alt="" e adiciona uma descrição para imagem.
    imagemHTML.setAttribute('alt', descricaoDaImagem);

    // Adiciona a classe .c-imagem no elemento <img> criando anteriormente.
    imagemHTML.classList.add('c-imagem');

    // Adiciona <img> no album <div class="l-album">.
    albumHTML.appendChild(imagemHTML);

}
