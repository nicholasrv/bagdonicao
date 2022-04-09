
/* 

    1. Selecione o formulário e o botão do campo de entrada

    2. Crie uma rotina que será disparada a partir do evento de envio

        - 2.1. Remova todos os espaços vazios no início e no fim do texto

        - 2.2. Valide se existem caracteres especiais

            - Se o campo possuir caracteres especiais, apresente um alerta para o usuário com a seguinte mensagem `"Não é permitido o uso de caracteres especiais em sua lista."`. **Nota:** Pode ser utilizado o método `alert()` para simplificar a lógica.

        - 2.3. Caso passe na validacão, apresente o item no elemento DOM `<li class="c-lista__item">`.

    3. Crie uma rotina que será disparada sempre que o usuário tirar o foco da campo de entrada

        - 2.1. Valide se o campo esta vazio

            - Se o campo estiver vazio, desative o botão `<button class="c-form__botao u-my" type="submit">Adicionar item</button>`.

        - 2.2. Valide se existem caracteres especiais 

            - Se o campo possuir caracteres especiais, apresente a seguinte mensagem no console do navegador `"Não é permitido o uso de caracteres especiais em sua lista."`.
*/


// 1. Selecione o formulário e o botão do campo de entrada

var formulario = document.querySelector('#formularioDeCadastro');

var botaoDeEnvio = document.querySelector('.c-form__botao');

var campoDeEnvio = document.querySelector('.c-form__campo');

var itemLista = document.querySelector('.c-lista__item');

// 2. Crie uma rotina que será disparada a partir do evento de envio

formulario.addEventListener('submit', function(evento){

    evento.preventDefault();

    // 2.1. Remova todos os espaços vazios no início e no fim do texto
    var removerEspacos = campoDeEnvio.value.trim();

    // 2.2. Valide se existem caracteres especiais

    if(possuiCaracteresEspeciais(removerEspacos)){
        alert('Não é permitido o uso de caracteres especiais em sua lista.')
    }

    // - 2.3. Caso passe na validacão, apresente o item no elemento DOM `<li class="c-lista__item">`.

    else{
        itemLista.innerText =  removerEspacos;
    }

});
  

// 2.1. Valide se o campo esta vazio
//  - Se o campo estiver vazio, desative o botão `<button class="c-form__botao u-my" type="submit">Adicionar item</button>`.

campoDeEnvio.addEventListener('blur', function(evento){
    if(campoDeEnvio.value == ''){
        botaoDeEnvio.disabled = true;
    }

    //// 2.2. Valide se existem caracteres especiais 
    ////  - Se o campo possuir caracteres especiais, apresente a seguinte mensagem no console do navegador `"Não é permitido o uso de caracteres especiais em sua lista."`.

    else if(possuiCaracteresEspeciais(campoDeEnvio.value)){
        console.log('Não é permitido o uso de caracteres especiais em sua lista.')
    }
    else if(!possuiCaracteresEspeciais(campoDeEnvio.value) && campoDeEnvio.value !== '' ){
        botaoDeEnvio.disabled = false;
    }

});




// Abaixo segue função para o exercicio 2.2 - Validar se o campo possui ou nao caractere especial por regex

function possuiCaracteresEspeciais(valorDoCampo) {
    
    var caracterEspecial = /\W/g;

    var retornoDaValidacao = caracterEspecial.test(valorDoCampo);

    return retornoDaValidacao;
    
}