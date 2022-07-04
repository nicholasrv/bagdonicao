package com.aulasdepoo.aula14;

import java.util.ArrayList;
import java.util.List;

public class PercorrerColecoes {

    public static void main(String[] args) {

        List nomes = new ArrayList();
        nomes.add("Juan");
        nomes.add("Mario");
        nomes.add("Carlos");
        nomes.add("Marcelo");
        nomes.add("Marcelo");


        System.out.println("------Percorrendo com for---------");

        //no exemplo:
        //nomes.add("Juan"); = get(0)
        //nomes.add("Mario"); = get(1)
        // nomes.add("Carlos"); = get(2)
        // nomes.add("Marcelo"); = get(3)
        // nomes.add("Marcelo"); = get(4)

        int indice = 0;
        //indice inicia em 0, percorrer até que o tamanho do array seja menor que do indice, acrescentar 1 pra cada loop
        for(indice=0; indice < nomes.size(); indice++) {
            System.out.println(nomes.get(indice)); //.get obtem o valor do indice da posição
        }




        System.out.println("------Percorrendo com while---------");
        //Muito útil quando necessário parar o ciclo antes de acessar todos os elementos

        //no exemplo:
        //nomes.add("Juan"); = get(0)
        //nomes.add("Mario"); = get(1)
        // nomes.add("Carlos"); = get(2)
        // nomes.add("Marcelo"); = get(3)
        // nomes.add("Marcelo"); = get(4)

        int i = 0;
        while(i < nomes.size()){ //.size pega o tamanho d alista
            System.out.println(nomes.get(i)); //.get obtem o valor que está naquele indice da posição
            i++; //pra ir pra próxima posição
        }



        System.out.println("------Exemplo com while---------");
        //Imagine que precisamos encontrar o Carlos, nesse caso podemos parar de procurar
        int ind = 0;
        boolean encontrado = false;
        while( ind < nomes.size() && !encontrado) {
            if(nomes.get(ind) == "Carlos") {
                encontrado = true;
                System.out.println(nomes.get(ind) + " está no índice " + ind);
            }
            ind++;
        }
    }

}
