package com.aulasdepoo.aula14;

import java.util.*;

public class ExemplosColecoes {

    public static void main(String[] args) {

        System.out.println("------ArrayList---------");
        //Armazena itens de forma contínua e o acesso a eles é sequencial.
        // É muito eficiente quando temos que armazenar e acessar os elementos diretamente
        // através de sua posição.

        List arrayList = new ArrayList();
        arrayList.add("Juan");
        arrayList.add("Mario");
        arrayList.add("Carlos");
        arrayList.add("Marcelo");
        arrayList.add("Marcelo");


        System.out.println("------Percorrendo ArrayList---------");
        int indice = 0;
        //indice inicia em 0, percorrer até que o tamanho do array seja menor que do indice, acrescentar 1 pra cada loop
        for(indice=0; indice < arrayList.size(); indice++) {
            System.out.println(arrayList.get(indice));
        }

        System.out.println("------Percorrendo ArrayList com Iterator---------");
        Iterator iterador = arrayList.iterator();
        while(iterador.hasNext()) {
            System.out.println(iterador.next());
        }

        System.out.println("------Percorrendo ArrayList com ForEach---------");
        for(Object o: arrayList) {
            System.out.println(o);
        }

        System.out.println("-------LinkedList--------");
        //mais desempenho quando precisamos fazer inserções em locais próximos
        // ao meio da lista, ou seja, quando estamos manipulando seus elementos,
        // mas não é muito eficiente quando precisamos apenas adicionar ou
        // acessar os elementos
        List linkedList = new LinkedList();
        linkedList.add("Juan");
        linkedList.add("Mario");
        linkedList.add("Carlos");
        linkedList.add("Marcelo");
        linkedList.add("Marcelo");

        for(Object o: linkedList) {
            System.out.println((String)o);
        }



        System.out.println("-------HashSet--------");
        //não pode armazenar valores duplicados ou nulos. É a implementação com
        // o melhor desempenho de todas, mas não garante nenhuma ordem ao
        // percorrê-la. Em outras palavras, quando o percorremos, os elementos
        // não estão na ordem em que os inserimos, por isso não possui um método get.
        Set hashset = new HashSet();
        hashset.add("Juan");
        hashset.add("Mario");
        hashset.add("Carlos");
        hashset.add("Marcelo");
        hashset.add("Marcelo");

        for(Object o: hashset) {
            System.out.println((String)o);
        }



        System.out.println("--------HashMap-------");
        //Os mapas são um conjunto de pares (valor-chave). É razoável pensar que as chaves
        // não podem ser repetidas e cada chave corresponde a apenas um valor.
        // Tanto no HashMap quanto no HashSet, os elementos não são armazenados na
        // mesma ordem de inserção.
        Map hashmap = new HashMap();
        hashmap.put(29888999,"Juan");
        hashmap.put(30888999,"Mario");
        hashmap.put(27888999,"Carlos");
        hashmap.put(40888999,"Marcelo");
        hashmap.put(50888999,"Marcelo");

        System.out.println("--------Obter o nome do cpf 27888999 -------");
        System.out.println(hashmap.get(27888999));

        System.out.println("--------Percorrendo -------");
        for(Object o :hashmap.values()) {
            System.out.println((String)o);
        }




        System.out.println("--------LinkedHashSet-------");
        //não podem armazenar valores duplicados ou nulos, mas os elementos
        // são armazenados na mesma ordem de inserção. Com o que, ao percorrermos,
        // veremos que os elementos estarão na mesma ordem em que foram inseridos.
        // É um pouco menos eficiente do que o HashSet e não tem um método get
        Set linkedhashset = new LinkedHashSet();
        linkedhashset.add("Juan");
        linkedhashset.add("Mario");
        linkedhashset.add("Carlos");
        linkedhashset.add("Marcelo");
        linkedhashset.add("Marcelo");

        for(Object o :linkedhashset) {
            System.out.println((String)o);
        }



        System.out.println("--------TreeSet-------");
        //Implementa a interface Set, mas também herda de uma classe chamada SortedSet
        // e isso permite que TreeSet armazene seus elementos de acordo com o valor
        // desses elementos.
        Set treeset = new TreeSet();
        treeset.add("Juan");
        treeset.add("Mario");
        treeset.add("Carlos");
        treeset.add("Marcelo");
        treeset.add("Marcelo");

        for(Object o: treeset) {
            System.out.println((String)o);
        }






        System.out.println("--------LinkedHashMap-------");
        //Ao contrário do HashMap, os elementos são armazenados com base
        // na ordem de inserção.
        Map linkedhashmap = new LinkedHashMap();
        linkedhashmap.put(29888999,"Juan");
        linkedhashmap.put(30888999,"Mario");
        linkedhashmap.put(27888999,"Carlos");
        linkedhashmap.put(40888999,"Marcelo");
        linkedhashmap.put(50888999,"Marcelo");

        System.out.println("--------Obter o nome do cpf 27888999 -------");
        System.out.println(linkedhashmap.get(27888999));

        System.out.println("--------Percorrendo -------");
        for(Object o :linkedhashmap.values()) {
            System.out.println((String)o);
        }



        System.out.println("--------TreeMap-------");
        //Os itens são armazenados em ordem de acordo com a chave. É importante
        // esclarecer que eles são ordenados de acordo com a chave e não de
        // acordo com o valor do objeto que armazenam.
        Map treemap = new TreeMap();
        treemap.put(29888999,"Juan");
        treemap.put(30888999,"Mario");
        treemap.put(27888999,"Carlos");
        treemap.put(40888999,"Marcelo");
        treemap.put(50888999,"Marcelo");

        System.out.println("--------Obter o nome do cpf 27888999 -------");
        System.out.println(treemap.get(27888999));

        System.out.println("--------Percorrendo -------");
        for(Object o :treemap.values()) {
            System.out.println((String)o);
        }
    }
}
