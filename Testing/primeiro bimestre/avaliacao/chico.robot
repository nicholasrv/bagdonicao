### Prova Testing I - Nicholas Ruas Viegas - Turma 7 ###

*** Settings ***
Library     SeleniumLibrary
Resource    ./chico.resource

*** Test Case ***
Test Setup
    Abrir o site da loja Chico Rei

Processo de compra de uma camiseta "Vira lata caramelo" no site do Chico Rei
    Aceitar Cookies
    Pesquisar por "Vira lata caramelo" e selecionar a primeira opção da lista de resultados
    Validar o valor de R$ 69,90
    Selecionar tamanho, cor e comprar
    Ir para a sacola
    Validar se a mensagem "VOCÊ ESTÁ ACUMULANDO 1 PONTO NO CARTÃO FIDELIDADE!" está aparecendo
    Fechar pedido

Processo de compra de uma camiseta "Amarelo é Desespero" no site do Chico Rei
    Aceitar Cookies - 2
    Pesquisar por "Amarelo é desespero" e selecionar a primeira opção da lista de resultados
    Validar o valor de R$ 69,90 - 2
    Selecionar tamanho, cor e comprar - 2
    Ir para a sacola - 2
    #Validar se a mensagem "Adquira o Chico Rei Prime para desfrutar de frete grátis por 1 ano em todos os pedidos, sem valor mínimo." está sendo exibida
    Fechar pedido - 2

Processo de compra de uma camiseta "Erarr é humano" no site do Chico Rei
    Aceitar Cookies - 3
    Pesquisar por "Erarr" e selecionar a primeira opção da lista de resultados
    Validar o valor de R$ 69,90 - 3
    Selecionar tamanho, cor e comprar - 3
    Ir para a sacola - 3
    Validar se a mensagem "De segunda a sexta, das 8h às 18h." está sendo exibida
    #Trocado o trecho de 20h para 18h para poder realizar o teste.
    Fechar pedido - 3

Processo de compra de uma camiseta "Nem Te Vi" no site do Chico Rei
    Aceitar Cookies - 4
    Pesquisar por "Nem Te Vi" e selecionar a primeira opção da lista de resultados
    Validar o valor de R$ 69,90 - 4
    Selecionar tamanho, cor e comprar - 4
    Ir para a sacola - 4
    Validar se a mensagem "Compre parcelado com cartão ou á vista com boleto ou depósito" está sendo exibida
    Fechar pedido - 4

Processo de compra de uma camiseta "Alceu Dispor" no site do Chico Rei
    Aceitar Cookies - 5
    Pesquisar por "Alceu Dispor" e selecionar a primeira opção da lista de resultados
    Validar o valor de R$ 69,90 - 5
    Selecionar tamanho, cor e comprar - 5
    Ir para a sacola - 5
    Validar se a mensagem "Sua primeira troca na Chico Rei é por nossa conta!" está sendo exibida
    Fechar pedido - 5