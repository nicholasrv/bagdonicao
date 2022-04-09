

// 1. Seleção do campo nome
var campoNome = document.querySelector('#nome');

/*
    Eventos de formulário:
        - focus
        - blur
        - change
*/
// 2. Captura o evento do campo nome
campoNome.addEventListener('blur', function(evento) {

    var valorCampoNome = evento.target.value.trim();

    // Resultados de validação para apresentação das mensagens para usuário
    // 1. Valor do campo está vazio
    var campoEstaVazio = estaVazio(valorCampoNome);
    // 2. Valor do campo possui mais de dez caracteres
    var campoPossuiMaisDeDezCaracteres = possuiMaisDeDezCaracteres(valorCampoNome);
    // 3. Valor do campo possui caracter especial
    var campoPossuiCaracteresEspeciais = possuiCaracteresEspeciais(valorCampoNome);
    // 4. Valor do campo possui números
    var campoPossuiNumeros = possuiNumeros(valorCampoNome);
    
    if(campoEstaVazio) {
        console.log('O campo está vazio');
    }
    else if(campoPossuiMaisDeDezCaracteres) {
        alert('O campo ultrapassou o limite de caracteres');
    }
    else if(campoPossuiNumeros) {
        alert('O campo não permite o uso de números');
    }
    else if(campoPossuiCaracteresEspeciais) {
        alert('O campo não permite o uso de caracteres especiais');
    }
    else {
        alert('Tudo ok, pode enviar!');
    }

});

// 1. Valor do campo está vazio
function estaVazio(valorDoCampo) {

    var valorVazio = '';

    var respostaDaValidacao = valorDoCampo === valorVazio;

    return respostaDaValidacao;
}

// 2. Valor do campo possui mais de dez caracteres
function possuiMaisDeDezCaracteres(valorDoCampo) {
    
    var numeroDeCaracteresDoCampoValor = valorDoCampo.length;
    var limiteDeCaracteres = 10;

    var respostaDaValidacao = numeroDeCaracteresDoCampoValor > limiteDeCaracteres;

    return respostaDaValidacao;
}

// 3. Valor do campo possui caracter especial
function possuiCaracteresEspeciais(valorDoCampo) {

    var expressaoRegular = /\W/g;

    var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

    return respostaDaValidacao;
}

// 4. Valor do campo possui números
function possuiNumeros(valorDoCampo) {

    var expressaoRegular = /\d/g;

    var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

    return respostaDaValidacao;

}