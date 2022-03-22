
// 1. Seleção do formulário
var formulario = document.querySelector("#formularioDeCadastro");

// 2. Captura o evento de envio do formulário e disparar a rotina
formulario.addEventListener("submit", function (evento) {

    // Captura o valor do input
    var telefoneSemTratamento = evento.target[0].value;

    // Removi os espaços
    var telefoneSemEspacos = telefoneSemTratamento.replace(/\s/g, "");

    // Removi os caracteres especiais e letras
    var telefoneApenasNumeros = telefoneSemEspacos.replace(/\D/g, "");

    // Apresento o valor a partir de um popup alert()
    alert(telefoneApenasNumeros);
    
});