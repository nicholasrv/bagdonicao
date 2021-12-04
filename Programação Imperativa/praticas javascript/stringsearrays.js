/*length*/
let texto = "Oi eu sou o nicholas";
console.log(texto.length);

//O length conta o número total de caracteres presentes em uma string. LEMBRANDO QUE TODA STRING COMEÇA NO CARACTERE 0 E NÃO 1.


/*IndexOf*/
console.log(texto.indexOf("o"));

//O IndexOf vai servir para eu buscar alguma letra ou trecho dentro da minha string.


/*slice*/
let palavra = texto.slice(0,3);
console.log(palavra);
console.log(texto);

// a estrutura do slice deve ser o intervalo de caracteres que eu quero tirar da string, lembrando que toda string começa do zero.
// Importante: O último caractere que eu mencionar não vai vir no slice. Vai vir um antes do que eu mencionar, SEMPRE.


/*trim*/
let arroz = "                 EU                    GOSTO             DE               ARROZ25185              ";
let ehbom = arroz.trim();
console.log(arroz);
console.log(ehbom);

//O trim serve para eliminarmos espaços no começo da string (nao serve para espaços que ficam no meio dela)


/*split*/
let jaja = "jajajajajaja basura";
let regala = jaja.split("b");
console.log(regala);

//O split transforma a string em um array, separando cada palavra que tiver na string como um valor para o novo array.
//Para que as palavras sejam devidamente separadas, precisamos colocar aspas e um espaço no meio, assim: -> " ".
//Caso utilizemos apenas as aspas sem o espaço no meio, ele vai separar cada caractere que tiver em toda a string, assim: -> ""


/*replace*/
let muymalo = "Carlos, el topo que gira!";
let basura = muymalo.replace("Carlos", "Homero");
console.log(basura);

// Com o replace podemos trocar alguma parte de nossa string com uma palavra e/ou caractere que desejarmos, passando dois parametros, assim ->: "O que vamos trocar", "Pelo que vamos trocar".
