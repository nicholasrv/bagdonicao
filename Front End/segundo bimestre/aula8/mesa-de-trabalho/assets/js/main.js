
// Utilize esse documento para implementar seu algorítimo...
    
/**
 * José Almir, Lucas Adrian, Nicholas Ruas Viegas,
 * Hugo Almeida, Felipe Lopes, Johnny Pecego, Victoria Dias
 */

 var linha1_coluna1 = document.querySelector('#linha-1_coluna-1');
 var linha1_coluna2 = document.querySelector('#linha-1_coluna-2');
 var linha1_coluna3 = document.querySelector('#linha-1_coluna-3');
 var linha2_coluna1 = document.querySelector('#linha-2_coluna-1');
 var linha2_coluna2 = document.querySelector('#linha-2_coluna-2');
 var linha2_coluna3 = document.querySelector('#linha-2_coluna-3');
 var linha3_coluna1 = document.querySelector('#linha-3_coluna-1');
 var linha3_coluna2 = document.querySelector('#linha-3_coluna-2');
 var linha3_coluna3 = document.querySelector('#linha-3_coluna-3');
 
 const elementos = [
     linha1_coluna1, linha1_coluna2, linha1_coluna3,
     linha2_coluna1, linha2_coluna2, linha2_coluna3,
     linha3_coluna1, linha3_coluna2, linha3_coluna3
 ];
 
 elementos.forEach(elemento => {
     elemento.addEventListener('click', () => {
         elemento.innerText = 'X';
     });
     elemento.addEventListener('dblclick', () => {
         elemento.innerText = 'O';
     });
 });
 
 var iniciar = document.querySelector('body');
 var tela = document.querySelector('#telaInicial');
 
 iniciar.addEventListener('keydown', (event) => {
     if(event.code == 'Space') {
         tela.style.display = 'none';
     } else if(event.code == 'Enter') {
         tela.style.display = 'block';
         tela.setAttribute('style', 'justify-content: center');
         limpaJogo();
     }
 });
 
 function limpaJogo() {
     elementos.forEach(elemento => {
         elemento.innerText = '';
     })
 }
 