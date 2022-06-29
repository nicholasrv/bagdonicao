package Aula15;

import java.util.ArrayList;
import java.util.Collections;

public class Porto {

    private String nome;
    private ArrayList<Container> containers = new ArrayList<>();

    public Porto(String nome) {
        this.nome = nome;
    }

    public void permitirEntrada(Container container){
        this.containers.add(container);
    }

    public ArrayList<Container> mostrarContainers(){
        Collections.sort(this.containers);
        return this.containers;
    }

    public void calculaContainersPerigosos(){
        int contador = 0;

        for(Container c : this.containers){
            if(c.isMateriaisPerigosos() && c.getPaisOrigem() == "Desconhecido"){
                contador++;
            }
        }

        System.out.println("O número de containers com materiais perigosos e origem desconhecida é: " + contador);
    }
}
