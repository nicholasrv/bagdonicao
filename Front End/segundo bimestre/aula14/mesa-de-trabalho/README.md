# Aula 14 - Mesa de trabalho

A atividade consiste em realizar o intercâmbio de dados entre página web, apresentar os dados em tela e persistir as informações.
        
## Instruções

1. Capture o nome do usuário a partir do campo `<input name="usuario">`:

    - 1.1. Armazene esse valor em uma variável;

    - 2.2. Redirecione o usuário e envie o valor para rota `resultado/` com parametro `nome`.

2. Crie um parametro `lang` e defina o valor `br`. 

3. Capture o valor do parametro `usuario`:

    - 1.1. Se houver o parametro `usuario` apresente o valor no elemento `<h1 class="texto">`

    - 1.2. Caso contrário apresente apenas a saudação. 
    
        **Nota:** A saudação já esta presente no código HTML.

4. Armaze as informações no `localStorage` e persista as informações.

5. **BONUS:** Armazene as informações de linguagem, presente no parametro `lang`:

    - 4.1. Altere o idioma da saudação

        **Exemplo**: Olá, Hi, Holá, etc.

        **Nota**: O intuito é realizar uma prova de conceito, portanto, não se preocupe com a quantidade de idiomas suportados.

<br><br>

**Nota:** Para entrega, siga o passo a passo do arquivo [__entregaDaAtividade__.md](https://gitlab.com/wssantanna/ctd-frontii/-/blob/main/14/mesa-de-trabalho/__entregaDaAtividade__.md).
