# Aula 19 - Atividade Integradora

A atividade consiste em realizar um fluxo completo de autenticação.

## Instruções

1. Implemente a autenticação do usuário:

    - 1.1. Envie uma requisição `POST` para a rota `/user/login` contendo o objeto `{ email:string, password:string }`;
    
    - 1.2. Caso exista o usuário, o retorno esperado é o `token de autenticação do usuário`. Amazene o token no `localStorage`.

    - 1.3. Redirecione o usuário para página `/tarefas`

2. Implemente a captura das informações de cadastro do usuário:

    - 2.1. Envie uma requisição `GET` para rota `/user/getMe` contendo o `token do usuário` no cabeçalho `header: { autorization: tokenDoUsuario }`.

    - 2.2. Armazene as informações do usuário no `localStorage`.

    - 2.3. Imprima no cabeçalho do aplicativo `nome completo` do usuário e `e-mail` de cadastro.

        **Nota:** Utiliza os dados do usuário armazenados no `localStorage`.