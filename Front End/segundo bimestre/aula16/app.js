

/* 
    Métodos HTTP 
    
        - Get: Pedir o retorno de um objeto ou mais.
        - Post: Criar um novo objeto.
        - Put: Atualizar o objeto.
        - Path: Atualizar parcialmente do objeto.
        - Delete: Deletar o objeto.

*/

var API_URL = 'https://jsonplaceholder.typicode.com';

// GET
pedirTodasPublicacoes();

// GET
var idDaPublicacao = 1;

pedirUmaPublicacao(1);

// PUT
var novaPublicacao = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
}

substituirUmaPublicacao(idDaPublicacao, novaPublicacao);

// PATCH
var publicacaoAtualizada = {
    title: 'foo'
}

atualizarUmaPublicacao(idDaPublicacao, publicacaoAtualizada);

// DELETE
deletarUmaPublicacao(idDaPublicacao);

function pedirTodasPublicacoes() {

    // URL(https://jsonplaceholder.typicode.com/posts)
    fetch(`${API_URL}/posts`)
        .then(function (respostaDoServidor) {
            
            // Retorno apenas dos dados convertidos em JSON.
            var JSON = respostaDoServidor.json();

            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
            
            // Resultado da promessa convertida em JSON. 
            console.log('GET pedirTodasPublicacoes() \n', respostaDoServidorEmJSON)
        });
}

function pedirUmaPublicacao(idDaPublicacao) {
    
    // URL(https://jsonplaceholder.typicode.com/posts/1)
    fetch(`${API_URL}/posts/${idDaPublicacao}`)
        .then(function (respostaDoServidor) {
            
            // Retorno apenas dos dados convertidos em JSON.
            var JSON = respostaDoServidor.json();
            // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
            // respostaDoServidor.body(); 

            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
            
            // Resultado da promessa convertida em JSON. 
            console.log('GET pedirUmaPublicacao() \n', respostaDoServidorEmJSON)
        });
}

function criarUmaPublicacao(corpoDaPublicacao) {

    /*
        Configurações do pedido:

        - method: Qual será o método utilizado? Get, Post, Put, Delete... 
        - body: Quais informações deseja enviar? 
        - headers: Quais os formatos e configurações do que deseja enviar?

    */
    var configuracoes = {
        method: 'POST',
        body: JSON.stringify(corpoDaPublicacao),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    // URL(https://jsonplaceholder.typicode.com/posts)
    fetch(`${API_URL}/posts/`, configuracoes)
        .then(function (respostaDoServidor) {
                
            // Retorno apenas dos dados convertidos em JSON.
            var JSON = respostaDoServidor.json();
            // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
            // respostaDoServidor.body(); 

            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
            
            // Resultado da promessa convertida em JSON. 
            console.log('POST criarUmaPublicacao() \n', respostaDoServidorEmJSON)
        });
}

function substituirUmaPublicacao(idDaPublicacao, corpoDaPublicacao) {

    /*
        Configurações do pedido:

        - method: Qual será o método utilizado? Get, Post, Put, Delete... 
        - body: Quais informações deseja enviar? 
        - headers: Quais os formatos e configurações do que deseja enviar?

    */
    var configuracoes = {
        method: 'PUT',
        body: JSON.stringify(corpoDaPublicacao),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
        
    // URL(https://jsonplaceholder.typicode.com/posts/1)
    fetch(`${API_URL}/posts/${idDaPublicacao}`, configuracoes)
        .then(function (respostaDoServidor) {
                        
            // Retorno apenas dos dados convertidos em JSON.
            var JSON = respostaDoServidor.json();
            // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
            // respostaDoServidor.body(); 
    
            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
                
            // Resultado da promessa convertida em JSON. 
            console.log('PUT substituirUmaPublicacao() \n', respostaDoServidorEmJSON)
        });
}

function atualizarUmaPublicacao(idDaPublicacao, corpoDaPublicacao) {

    var configuracoes = {
        method: 'PATCH',
        body: JSON.stringify(corpoDaPublicacao),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    
    // URL(https://jsonplaceholder.typicode.com/posts/1)
    fetch(`${API_URL}/posts/${idDaPublicacao}`, configuracoes)
        .then(function (respostaDoServidor) {
                    
            // Retorno apenas dos dados convertidos em JSON.
            var JSON = respostaDoServidor.json();
            // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
            // respostaDoServidor.body(); 

            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
            
            // Resultado da promessa convertida em JSON. 
            console.log('PATCH atualizarUmaPublicacao() \n', respostaDoServidorEmJSON)
        });
}

function deletarUmaPublicacao(idDaPublicacao) {

    var configuracoes = {
        method: 'DELETE'
    }

    // URL(https://jsonplaceholder.typicode.com/posts/1)
    fetch(`${API_URL}/posts/${idDaPublicacao}`, configuracoes)
        .then(function (respostaDoServidor) {
                        
            // Retorno apenas dos dados convertidos em JSON.
            var JSON = respostaDoServidor.json();
            // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
            // respostaDoServidor.body(); 

            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
                
            // Resultado da promessa convertida em JSON. 
            console.log('DELETE deletarUmaPublicacao() \n',respostaDoServidorEmJSON)
        });

}
