/**
 * Captura e validação dos dados do usuário enviado pelo formulário.
 * @param {*} eventoDoFormulario Objeto de evento do formulário.
 */
 function validarCredenciaisDoUsuario(eventoDoFormulario) {

    // Para não atualizar a página.
    eventoDoFormulario.preventDefault();

    // Destruturando/Separando os campos e-mail e senha do formulário.
    let [email, senha] = eventoDoFormulario.target;

    // Armazena e-mail e senha em variáveis.
    let emailDoUsuario = email.value;
    let senhaDoUsuario = senha.value;

    // Cria um objeto contendo as credenciais do usuário.
    let credenciaisDoUsuario = {
        email: emailDoUsuario,
        password: senhaDoUsuario
    }

    // Requisição de autenticação do usuário.
    autenticarUsuario(credenciaisDoUsuario);

}






// Services responsáveis pela comunicação com a API.

/**
 * Base do endereço da API.
 * @constant BASE_URL_API
 * @type string
*/
const BASE_URL_API = 'https://ctd-todo-api.herokuapp.com/v1';

/**
 * Service de autenticação do usuário.
 * @param credenciaisDoUsuario Objeto contendo e-mail e senha.
 * @type { email: string, password: string } 
 */
function autenticarUsuario(credenciaisDoUsuario) {

    // Configurações da requisição POST.
    let configuracoes = {
        method: 'POST',
        body: JSON.stringify(credenciaisDoUsuario),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    // Requisição de autenticação do usuário.
    fetch(`${BASE_URL_API}/users/login/`, configuracoes)
        .then(function (respostaDoServidor) {
                
            // Retorno apenas dos dados convertidos em JSON.
            let JSON = respostaDoServidor.json();

            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
            
            // Capturando o retorno token JWT do Servidor.
            let tokenDoUsuario = respostaDoServidorEmJSON.jwt;

            // Requisição dos dados de cadastro do Usuário.
            pedirInformacoesDoUsuario(tokenDoUsuario);

            // Apresentando resultado final no console.log().
            console.log(`POST autenticarUsuario() ${JSON.stringify(respostaDoServidorEmJSON)}`);

        });
}

/**
 * Pedi os dados de cadastro do usuário.
 * @param {string} tokenDoUsuario Token JWT da autenticação do usuário.
 */
function pedirInformacoesDoUsuario(tokenDoUsuario) {

    // Configurações da requisição GET.
    let configuracoes = {
        method: 'GET',
        headers: {
            'authorization': tokenDoUsuario
        },
    }

    // Requisição para retorno dos dados de cadastro do usuário.
    fetch(`${BASE_URL_API}/users/getMe/`, configuracoes)
        .then(function (respostaDoServidor) {
                
            // Retorno apenas dos dados convertidos em JSON.
            let JSON = respostaDoServidor.json();

            // Retorno da promessa convertida em JSON.
            return JSON;
        })
        .then(function (respostaDoServidorEmJSON) {
            
            // Apresentando resultado final no console.log().
            console.log(`GET pedirInformacoesDoUsuario() ${JSON.stringify(respostaDoServidorEmJSON)}`);

        });

}