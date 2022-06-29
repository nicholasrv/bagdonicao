package com.aulasdepoo.aula14;

import java.util.*;

public class OperacoesColecoes {

    public static void main(String[] args) {

        //criar coleções
        List nomes = new ArrayList();
        Set sobrenomes = new HashSet(); // não armazena valores nulos ou repetidos
        Map idades = new HashMap(); // permite valores duplicadas mas não permite chaves duplicadas

        //adicionando dados
        nomes.add("Lara");
        nomes.add("Luiz");

        sobrenomes.add("Carvaji");
        sobrenomes.add("Baueria");

        idades.put(1, 15);
        idades.put(2, 35);

        //remover dados
        nomes.remove("Luiz"); //Ou nomes.remove(2)

    }
}
