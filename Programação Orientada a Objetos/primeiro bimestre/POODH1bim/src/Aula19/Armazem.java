package Aula19;

import java.util.ArrayList;

public class Armazem {
    private ArrayList<Produto> produtos = new ArrayList<>();

    public void addProduto(Produto produto){
        produtos.add(produto);
    }

    public void print(){
        for (Produto p : produtos){
            System.out.println(p.getClass());
            System.out.println(p.getPeso());
        }
    }

    public double calcularEspacoNecessario() {
        return 0;
    }
}
