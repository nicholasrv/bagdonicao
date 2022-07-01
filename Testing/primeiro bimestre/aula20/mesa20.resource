*Variables
${SITE}                 https://www.saucedemo.com
${NAVEGADOR}            Chrome
${CAMPO_USUARIO}        user-name
${USUARIO}              standard_user
${CAMPO_SENHA}          password
${SENHA}                secret_sauce
${BOTAO_LOGIN}          login-button

*Keywords
Abrir o site da loja Sauce demo
  Open Browser  ${SITE}  ${NAVEGADOR}
  Maximize Browser Window

Fazer login
  Input Text  ${CAMPO_USUARIO}  ${USUARIO}
  Input Text  ${CAMPO_SENHA}  ${SENHA}
  Click Element  ${BOTAO_LOGIN}