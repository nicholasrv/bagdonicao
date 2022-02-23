var nome = prompt("Qual é o seu nome completo?", "anonimo");


while(!nome){
    alert("É obrigatório preencher o nome")
    nome = prompt("Qual é o seu nome completo?");
}

var telefone = prompt("Qual é o seu número de telefone?")


while(!telefone){
    alert("É obrigatório preencher o telefone")
    nome = prompt("Qual o seu número de telefone?");
}

var whatsapp = confirm("Esse número é whatsapp?")
alert("Muito obrigado, " + nome + "!" + " Um de nossos consultores entrará em contato contigo através do número " + telefone + ". ")


//// CTD - Mesa 4 - Turma 7
///
// Integrantes do Grupo: Victoria Dias, Marcus Rodrigues, Nicholas Ruas Viegas
///
////
