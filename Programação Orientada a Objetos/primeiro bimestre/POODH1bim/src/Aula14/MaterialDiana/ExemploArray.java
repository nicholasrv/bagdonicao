package com.aulasdepoo.aula14;

public class ExemploArray {

    public static void main(String[] args) {
        //Arrays são estruturas de dados ESTÁTICAS, permite armazenar elementos do mesmo tipo continuamente
        //comprimento fixo definido na criação, após é imutável

        //criação
        String[] nomes = new String[5];

        //adição
        nomes[0] = "Juan";
        nomes[1] = "Assis";
        nomes[2] = "Maria";
        //como as outras posições não foram inseridas vai considerar null

        //percorrer lista
        System.out.println("-----for-----");
        for (int i = 0; i < nomes.length; i++){ //lenght recupera o tamanho
            System.out.println(nomes[i]);
        }

        System.out.println("-----for geral-----");
        for(String nome: nomes){
            System.out.println(nome);
        }

        System.out.println("-----while-----");
        int i = 0;
        while (i < nomes.length){ //lenght recupera o tamanho
            System.out.println(nomes[i]);
            i++;
        }
    }


}
