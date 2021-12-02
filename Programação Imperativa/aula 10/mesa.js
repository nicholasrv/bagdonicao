// 1.Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento
//  em ordem reversa no console (você não precisa inverter o Array).
function imprimirInverso(array) {  
    console.log(array.reverse());
   }
   imprimirInverso(["one","two","three"]);
   
   // 2.Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
   
   function inverter(array){
    let inverter = array.reverse();
    console.log(inverter);
   }
   
   inverter(["one","two","three","four"])
   
   // Neste exercício, você criará uma função somarArray() que aceita um array de números
   // e retorna a soma de todos eles.
   
   function somarArray(array){
     
     console.log(array[0]+array[1]+array[2])
   
   }
   somarArray([1, 3, 5]);
   