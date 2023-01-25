/////////// Exercicio 1 - retorno de soma indice/K

let indice = 13
let soma = 0
let k = 0

while (k < indice) {
  k = k + 1
  soma = soma + k;
}

console.log(soma);

//////// Exercicio 2 - Sequencia de Fibonacci:

const numero = parseInt(prompt('Insira um número positivo: '));
let n1 = 0, n2 = 1, proximoTermo

console.log('Sequência de Fibonacci:');
console.log(n1); // imprimir 0
console.log(n2); //imprimir 1

proximoTermo = n1 + n2; // O proximo termo é a soma dos dois anteriores, portanto n1 + n2

while (proximoTermo <= numero) {

  // Enquanto o próximo termo for igual a soma dos anteriores, imprimir o número no console.
  
  console.log(proximoTermo);

  n1 = n2;
  n2 = proximoTermo;
  proximoTermo = n1 + n2;

  proximoTermo === numero ? (
    console.log("O número informado pertence a sequência.")
  ) : (null)
};

////////// Exercício 3 - faturamento:

let arrFaturamento = [{
    "dia": 1,
    "valor": 22174.1664
},
{
    "dia": 2,
    "valor": 24537.6698
},
{
    "dia": 3,
    "valor": 26139.6134
},
{
    "dia": 4,
    "valor": 0.0
},
{
    "dia": 5,
    "valor": 0.0
},
{
    "dia": 6,
    "valor": 26742.6612
},
{
    "dia": 7,
    "valor": 0.0
},
{
    "dia": 8,
    "valor": 42889.2258
},
{
    "dia": 9,
    "valor": 46251.174
},
{
    "dia": 10,
    "valor": 11191.4722
},
{
    "dia": 11,
    "valor": 0.0
},
{
    "dia": 12,
    "valor": 0.0
},
{
    "dia": 13,
    "valor": 3847.4823
},
{
    "dia": 14,
    "valor": 373.7838
},
{
    "dia": 15,
    "valor": 2659.7563
},
{
    "dia": 16,
    "valor": 48924.2448
},
{
    "dia": 17,
    "valor": 18419.2614
},
{
    "dia": 18,
    "valor": 0.0
},
{
    "dia": 19,
    "valor": 0.0
},
{
    "dia": 20,
    "valor": 35240.1826
},
{
    "dia": 21,
    "valor": 43829.1667
},
{
    "dia": 22,
    "valor": 18235.6852
},
{
    "dia": 23,
    "valor": 4355.0662
},
{
    "dia": 24,
    "valor": 13327.1025
},
{
    "dia": 25,
    "valor": 0.0
},
{
    "dia": 26,
    "valor": 0.0
},
{
    "dia": 27,
    "valor": 25681.8318
},
{
    "dia": 28,
    "valor": 1718.1221
},
{
    "dia": 29,
    "valor": 13220.495
},
{
    "dia": 30,
    "valor": 8414.61
}
]

    // Tirar o maior e o menor dia do faturamento:

    let maiorValor = arrFaturamento.reduce(function(anterior, atual) {
        return anterior.valor > atual.valor ? anterior : atual;
    });

    console.log(maiorValor);

    let menorValor = arrFaturamento.reduce(function(anterior, atual) {
        return anterior.valor < atual.valor ? anterior : atual;
    });

    console.log(menorValor);

    // Verifico o total de faturamento no mês, percorrendo o array:

    let totalFaturamentoMes = 0

    for (let i = 0; i< arrFaturamento.length; i++){
        totalFaturamentoMes += arrFaturamento[i].valor
    };
    console.log(totalFaturamentoMes);

    // crio abaixo um novo array filtrado, com o objetivo de remover os dias que do mês que não tiveram faturamento, utilizando o método filter:

    let ArrFaturamentoFiltrado = arrFaturamento.filter(function(x) {
    return x.valor > 0
}
);

    // Agora tiro a média de faturamento mensal com base no novo array filtrado:

    let mediaFaturamentoMes = totalFaturamentoMes / ArrFaturamentoFiltrado.length
    console.log(mediaFaturamentoMes);

    // Finalmente, crio uma função para realizar a checagem dos valores de cada dia e verificar quais deles ficam acima da média mensal de faturamento:

    function FaturamentoMaiorQueAMedia() {

        for (let i = 0; i< arrFaturamento.length; i++){

            arrFaturamento[i].valor > mediaFaturamentoMes ? 
            console.log(`O dia ${arrFaturamento[i].dia} teve faturamento maior que a media`) 
            : null

        };
};
    FaturamentoMaiorQueAMedia();

////////// Exercício 4 - Percentual de representação de cada estado no faturamento total mensal:

        // Consolido todos os números em um array de objetos (JSON) para melhor manipulação dos dados:

            const arrFaturamentoPorEstado = [
                {
                    'Estado': 'SP',
                    'ValorMensal': 67836.43
                },
                {
                    'Estado': 'RJ',
                    'ValorMensal': 36678.66
                },
                {
                    'Estado': 'MG',
                    'ValorMensal': 29229.88
                },
                {
                    'Estado': 'ES',
                    'ValorMensal': 27165.48
                },
                {
                    'Estado': 'Outros',
                    'ValorMensal': 19849.53
                }
                ]

        // Calculo a soma dos valores mensais de cada Estado, para poder verificar as porcentagens posteriormente:

            let totalFaturamentoDosEstados = 0

            for (let i = 0; i< arrFaturamentoPorEstado.length; i++){
                totalFaturamentoDosEstados += arrFaturamentoPorEstado[i].ValorMensal
            };

            console.log(totalFaturamentoDosEstados);

        // Uso o método map para gerar um novo array com as porcentagens de cada índice do array original, calculadas em cima do valor total de faturamento.

            let porcentagemDeCadaEstado = arrFaturamentoPorEstado.map(ValorMensal => ValorMensal.ValorMensal * 100 / totalFaturamentoDosEstados)

            let arrFinal = porcentagemDeCadaEstado.map(x => x.toFixed(2));

            console.log(arrFinal, "porcentagem de cada estado");

////////// Exercício 5 - Escreva um programa que inverta os caracteres de um string.

function inverterString(str) {
    let strInversa = "";

    for (let i = str.length - 1; i >= 0; i--) { 
        strInversa += str[i];
    }

    return strInversa; 
}
 
console.log(inverterString('Nicholas Ruas Viegas'));