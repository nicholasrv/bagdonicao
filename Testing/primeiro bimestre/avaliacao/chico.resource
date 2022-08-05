*** Variables ***
${SITE}                 https://chicorei.com/
${NAVEGADOR}            Chrome
${COOKIE}               id=confirmPolicyButton
${BARRA-PESQUISA}       id=header-search-input-desktop
${CARAMELO}             Vira lata caramelo
${CAMISA-CARAMELO}      xpath=//div[@id='header-search-desktop']/form/div/div/div/div/div/div[2]/div
${ID-CARAMELO69}        css=.text-yanone > .d-inline-flex > .h2
${VALOR-CARAMELO}       R$ 69,99
${TAMANHO-CARAMELO}     css=.cr-option:nth-child(3)
${COR-CARAMELO}         css=.cr-option-selected > .product-color-option
${COMPRAR-CARAMELO}     css=.btn-loading:nth-child(1) > span:nth-child(2)
${VER-SACOLA}           css=.header-cart-loading:nth-child(1) .btn
${ID-LOYALTY}           id=cart-loyalty
${FIDELIDADE}           VOCÊ ESTÁ ACUMULANDO 1 PONTO NO CARTÃO FIDELIDADE!
${FECHAR-PEDIDO}        css=.btn-xl
${DESESPERO}            Amarelo é Desespero
${CAMISA-DESESPERO}     xpath=//div[@id='header-search-desktop']/form/div/div/div/div/div/div[2]/div
${ID-DESESPERO69}       css=.text-yanone > .d-inline-flex > .h2
${VALOR-DESESPERO}      R$ 69,99
${TAMANHO-DESESPERO}    css=.cr-option-squared:nth-child(2)
${COR-DESESPERO}        css=.cr-option-selected > .product-color-option
${COMPRAR-DESESPERO}    xpath=//div[@id='product-buy-button-container']/button/span[2]
${ERRAR}                Erarr
${CAMISA-ERRAR}         xpath=//div[@id='header-search-desktop']/form/div/div/div/div/div/div[2]/div
${ID-ERRAR69}           css=.text-yanone > .d-inline-flex > .h2
${VALOR-ERRAR}          R$ 69,99
${TAMANHO-ERRAR}        css=.cr-option-squared:nth-child(2)
${COR-ERRAR}            css=.cr-option:nth-child(2) > .product-color-option
${COMPRAR-ERRAR}        css=.btn-loading:nth-child(1) > span:nth-child(2)
${HORARIO-LOJA}         De segunda a sexta, das 8h às 18h.
${NEMTEVI}              Nem Te Vi
${CAMISA-NEMTEVI}       xpath=//div[@id='header-search-desktop']/form/div/div/div/div/div/div[2]/div
${ID-NEMTEVI69}         css=.text-yanone > .d-inline-flex > .h2
${VALOR-NEMTEVI}        R$ 69,99
${TAMANHO-NEMTEVI}      css=.cr-option-squared:nth-child(1)
${COR-NEMTEVI}          css=.cr-option:nth-child(2) > .product-color-option
${COMPRAR-NEMTEVI}      css=.btn-loading:nth-child(1) > span:nth-child(2)
${MSG-PGTO}             Compre parcelado com cartão ou a vista com boleto ou depósito
${ALCEU}                Alceu Dispor
${CAMISA-ALCEU}         xpath=//div[@id='header-search-desktop']/form/div/div/div/div/div/div[2]/div
${ID-ALCEU69}           css=.text-yanone > .d-inline-flex > .h2
${VALOR-ALCEU}          R$ 69,99
${TAMANHO-ALCEU}        css=.cr-option-squared:nth-child(4)
${COR-ALCEU}            css=.cr-option:nth-child(2) > .product-color-option
${COMPRAR-ALCEU}        css=.btn-loading:nth-child(1) > span:nth-child(2)
${TROCA}                Sua primeira troca na Chico Rei é por nossa conta!


*** Keywords ***
Abrir o site da loja Chico Rei
    Open Browser            ${SITE}             ${NAVEGADOR}
    Maximize Browser Window

Aceitar Cookies
    Click Element           ${COOKIE}

Pesquisar por "Vira lata caramelo" e selecionar a primeira opção da lista de resultados
    Input Text              ${BARRA-PESQUISA}   ${CARAMELO}
    Sleep                   2
    Click Element           ${CAMISA-CARAMELO}

Validar o valor de R$ 69,90
    Element Should Contain  ${ID-CARAMELO69}   ${VALOR-CARAMELO} 

Selecionar tamanho, cor e comprar
    Click Element           ${TAMANHO-CARAMELO}
    Sleep                   2
    Click Element           ${COR-CARAMELO}
    Sleep                   2
    Click Element           ${COMPRAR-CARAMELO} 

Ir para a sacola
    Sleep                   2
    Click Element           ${VER-SACOLA}

Validar se a mensagem "VOCÊ ESTÁ ACUMULANDO 1 PONTO NO CARTÃO FIDELIDADE!" está aparecendo
    Sleep                   2
    Element Should Contain  ${ID-LOYALTY}       ${FIDELIDADE}

Fechar pedido
    Sleep                   2
    Click Element           ${FECHAR-PEDIDO}
    Sleep                   3
    Close Browser

#------------------#

Aceitar Cookies - 2
    Open Browser            ${SITE}             ${NAVEGADOR}
    Maximize Browser Window
    Click Element           ${COOKIE}

Pesquisar por "Amarelo é desespero" e selecionar a primeira opção da lista de resultados
    Input Text              ${BARRA-PESQUISA}   ${DESESPERO}
    Sleep                   2
    Click Element           ${CAMISA-DESESPERO}

Validar o valor de R$ 69,90 - 2
    Element Should Contain  ${ID-DESESPERO69}   ${VALOR-DESESPERO} 

Selecionar tamanho, cor e comprar - 2
    Click Element           ${TAMANHO-DESESPERO}
    Sleep                   2
    Click Element           ${COR-DESESPERO}
    Sleep                   2
    Execute Javascript      window.scrollTo(0,300)
    Sleep                   2
    Click Element           ${COMPRAR-DESESPERO}

Ir para a sacola - 2
    Sleep                   2
    Click Element           ${VER-SACOLA}

#Validar se a mensagem "Adquira o Chico Rei Prime para desfrutar de frete grátis por 1 ano em todos os pedidos, sem valor mínimo." está sendo exibida
#NÃO SE APLICA

Fechar pedido - 2
    Sleep                   2
    Click Element           ${FECHAR-PEDIDO}
    Sleep                   3
    Close Browser

#------------------#

Aceitar Cookies - 3
    Open Browser            ${SITE}             ${NAVEGADOR}
    Maximize Browser Window
    Sleep                   2
    Click Element           ${COOKIE}

Pesquisar por "Erarr" e selecionar a primeira opção da lista de resultados
    Input text              ${BARRA-PESQUISA}   ${ERRAR}
    Sleep                   2
    Click Element           ${CAMISA-ERRAR}

Validar o valor de R$ 69,90 - 3
    Sleep                   1
    Element Should Contain  ${ID-ERRAR69}   ${VALOR-ERRAR} 

Selecionar tamanho, cor e comprar - 3
    Click Element           ${TAMANHO-ERRAR}
    Sleep                   2
    Click Element           ${COR-ERRAR}
    Sleep                   2
    Click Element           ${COMPRAR-ERRAR}

Ir para a sacola - 3
    Sleep                   2
    Click Element           ${VER-SACOLA}

Validar se a mensagem "De segunda a sexta, das 8h às 18h." está sendo exibida
    Sleep                   1
    Page Should Contain     ${HORARIO-LOJA}

Fechar pedido - 3
    Sleep                   2
    Click Element           ${FECHAR-PEDIDO}
    Sleep                   3
    Close Browser

#------------------#

Aceitar Cookies - 4
    Open Browser            ${SITE}             ${NAVEGADOR}
    Maximize Browser Window
    Sleep                   2
    Click Element           ${COOKIE}

Pesquisar por "Nem Te Vi" e selecionar a primeira opção da lista de resultados
    Input Text              ${BARRA-PESQUISA}   ${NEMTEVI} 
    Sleep                   2
    Click Element           ${CAMISA-NEMTEVI} 

Validar o valor de R$ 69,90 - 4
    Element Should Contain  ${ID-NEMTEVI69}   ${VALOR-NEMTEVI} 

Selecionar tamanho, cor e comprar - 4
    Click Element           ${TAMANHO-NEMTEVI}
    Sleep                   2
    Click Element           ${COR-NEMTEVI}
    Sleep                   2
    Click Element           ${COMPRAR-NEMTEVI} 

Ir para a sacola - 4
    Sleep                   2
    Click Element           ${VER-SACOLA}

Validar se a mensagem "Compre parcelado com cartão ou á vista com boleto ou depósito" está sendo exibida
    Sleep                   1
    Page Should Contain     ${MSG-PGTO}

Fechar pedido - 4
    Sleep                   2
    Click Element           ${FECHAR-PEDIDO}
    Sleep                   3
    Close Browser

#------------------#

Aceitar Cookies - 5
    Open Browser            ${SITE}             ${NAVEGADOR}
    Maximize Browser Window
    Sleep                   2
    Click Element           ${COOKIE}

Pesquisar por "Alceu Dispor" e selecionar a primeira opção da lista de resultados
    Input Text              ${BARRA-PESQUISA}  ${ALCEU} 
    Sleep                   2
    Click Element           ${CAMISA-ALCEU} 

Validar o valor de R$ 69,90 - 5
    Element Should Contain  ${ID-ALCEU69}  ${VALOR-ALCEU} 

Selecionar tamanho, cor e comprar - 5
    Click Element           ${TAMANHO-ALCEU}
    Sleep                   2
    Click Element           ${COR-ALCEU}
    Sleep                   2
    Click Element           ${COMPRAR-ALCEU} 

Ir para a sacola - 5
    Sleep                   2
    Click Element           ${VER-SACOLA}

Validar se a mensagem "Sua primeira troca na Chico Rei é por nossa conta!" está sendo exibida    Sleep                   1
    Page Should Contain     ${TROCA}

Fechar pedido - 5
    Sleep                   2
    Click Element           ${FECHAR-PEDIDO}
    Sleep                   3
    Close Browser  

