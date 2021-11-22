/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */

// Os operadores "==" e "!=" servem para compararmos dois valores, devolvendo um valor booleano de verdadeiro (true) ou falso (false).

20 == 15 // Igualdade -> false
10 != 15 // Desigualdade -> true


/* ==========================
COMPARAÇÃO ESTRITA
========================== */

// Os operadores "===" e "!==" servem para compararmos dois valores e também seus tipos de dados, devolvendo um valor booleano de verdadeiro (true) ou falso (false).

10 === "10" // Igualdade estrita -> false
10 !== 15 // Desigualdade estrita -> true

/* ==========================
OPERADORES RELACIONAIS
========================== */

/* Comparam dois valores, devolvendo um booleano (true ou false).*/

15 > 15 // Maior que -> False
15 >= 15 // Maior ou igual a -> True
10 < 15 // Menor que -> true
10 <= 15 // Menor ou igual a -> True


/* ==========================
LÓGICOS
========================== */

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano

/*==== AND (&&) - Neste operador, todos os valores devem ser avaliados como true (verdadeiro) para o resultado dar verdadeiro*/

(10 > 15) && (10 != 20)  /* = retornará false, pois apenas uma das comparações é verdadeira.
  false         true     */     


(16 > 15) && (10 != 20)  /* = retornará true, pois ambas comparações são verdadeiras.
  true         true       */ 


/*==== OR (||) - Neste operador, pelo menos um valor deverá ser avaliado como true para que o resultado seja true. */

(10 > 15) || (10 != 20)  /* = retornará true, pois uma das comparações é verdadeira.
  false         true     */  

(13 > 15) || (10 != 10)  /* = retornará false, pois ambas comparações são falsas.
  false         false    */


/*==== NOT (!) - Este operador nega a condição. Se era true, será false e vice-versa.*/

!false //  true
!(20 > 15) // false

/* ==========================
PRINCIPAIS REGRAS DE COMPARACOES DE VALORES - TRUTHY OR FALSY
========================== */

// Todos são verdadeiros
false == 0;
0 == '';
null == undefined;
[] == false;
!![0] == true;
 
// Todos são falsos.
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;



