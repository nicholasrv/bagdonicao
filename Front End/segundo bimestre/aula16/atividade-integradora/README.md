# Aula 16 - Atividade Integradora: Documentação To Do App

Não é a primeira vez que codificamos em nosso projeto de integração, mas ainda há um longo caminho a percorrer. Vamos ao que interessa!

## Primeiro passo

Vamos dar ao nosso login algumas funcionalidades mais reais, já temos um servidor e queremos fazer login. Para fazer isso, primeiro devemos criar uma conta com o formulário que vimos anteriormente e depois podemos entrar com um nome de usuário e senha. [Na documentação](https://ctd-todo-api.herokuapp.com/) você encontra as especificações das requisições para o servidor:

- Quais endpoints são úteis para isso?

- O que o servidor nos devolve ao criar uma conta? E quando entramos?

- Devo salvar as informações do servidor? Como?

Você terá que abordar os seguintes pontos nesta mesa de trabalho:

1. Finalize a validação no formulário de registro e login.

    - 1.1. Validações necessárias:

        - repetir a senha deve corresponder à senha (register);

        - nenhum campo vazio (register e login)

    - 1.2. Normalização:

        - devem finalmente preparar o objeto normalizado em ambos os casos. Exemplo para register:

            ```json
            {
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string"
            }
            ```
2. Desenvolver o script do **cadastro**

    - 2.1. Aqui, você deve usar o evento submit para lançar o POST correspondente à API, processo através do qual se realiza a criação de um usuário, exibindo finalmente a resposta no console.

3. Desenvolver a **autenticação**

    - 3.1. Aqui, você deve usar o evento submit para lançar o POST correspondente à API. Neste caso, o processo refere-se à situação em que um usuário efetua login na aplicação, finalmente exibindo a resposta no console.

## Link(s)

- [Documentação do To do App](https://ctd-todo-api.herokuapp.com/)

<br><br>

**Nota:** Para entrega, siga o passo a passo do arquivo [__entregaDaAtividade__.md](https://gitlab.com/wssantanna/ctd-frontii/-/blob/main/16/mesa-de-trabalho/__entregaDaAtividade__.md).
