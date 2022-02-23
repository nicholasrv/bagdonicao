
/*
    O método alert() serve para apresentar em tela um pop-up
    com uma mensagem de texto. Caso deseje guardar na memória
    o método alert() após a interação do usuário, ele lhe retornará 
    underfined. 

    Opinião do professor: Por uma questão de performance, particularmente,
    não costumo guardar na mémoria, através de uma variável, os alert().
*/
var mensagemDeBoasVindas = alert("Seja bem-vindo(a) a Digital House");

console.log(mensagemDeBoasVindas); // retorna underfined

/*
    O método confirm() serve para apresentar em tela um pop-up
    com uma mensagem de texto seguida de dois botões - Cancelar e OK. 
    Caso deseje guardar na memória o método confirm() após a interação do usuário,
    ele lhe retornará true (OK) ou false (Cancelar). 

    Opinião do professor: Podemos utilizar a respostas para gerar uma lógica 
    condicional, logo é interessante que essa resposta seja guardada em uma variável.

    Nota: Não é possível mudar o texto dos botões.
*/
var usuarioEhUmAluno = confirm("Você é aluno na Digital House?");

console.log(usuarioEhUmAluno); // retorna true (verdadeiro) ou false (falso)

/*
    O método prompt() serve para apresentar em tela um pop-up
    com uma mensagem de texto seguida de um campo para que o usuário digite
    livremente. Caso deseje guardar na memória o método prompt() após a interação do usuário,
    ele lhe retornará a mensagem de texto padrão ou o texto digitado pelo usuário.

    Opinião do professor: Podemos utilizar a respostas para gerar manipulações com as
    informações do usuário, em aulas futuras veremos situações similares com formulários.

    Nota: Caso não seja definido, em seu segundo parametro, a mensagem padrão, o retorno 
    do método será underfined.
*/
var identificacaoDoUsuario = prompt("Qual seu nome?", "Visitante");

console.log(identificacaoDoUsuario); // retorna o valor padrão ou o valor digitado pelo usuário



/*
    Documentação oficial MDN Web Docs

    alert() https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
    confirm() https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm
    prompt() https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt
*/

// Um exemplo de manipulação utilizando o alert, confirm e prompt anteriores...

/*
    Estamos utilizando a variável usuarioEhUmAluno para validar se o visitante 
    é um aluno da Digital House. No caso estou aproveitando a condicional if, 
    onde if representa o "se" e else representa "então/caso contrário".

    A leitura ficaria mais ou menos assim...

    se (usuarioEhUmAluno for verdadeiro)
*/
    if (usuarioEhUmAluno == true) {
        /*
            Estou utilizando a variável identificacaoDoUsuario que 
            possui o resultado (se espera o nome do usuário) do prompt 
            para manipular os dados.
        */
        alert("Seja bem vindo(a) "+ identificacaoDoUsuario + " . Você será redirecionado para página da DH.");
    }
/*
    então/caso contrário...
*/ 
    else {
        /*
            Mais uma vez, estou reaproveitando a variável identificacaoDoUsuario
            que possui o resultado (se espera o nome do usuário) do prompt
            para manipular os dados.
        */
        alert(identificacaoDoUsuario + " vamos te redirecionar para um de nossos consultores.");
    }