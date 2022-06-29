package Aula19;

public class Main {
    public static void main(String[] args) {
        ProdutoFactory fabrica = ProdutoFactory.getInstance(); //criacao da fabrica de produtos
        Armazem armazem = new Armazem();

        armazem.addProduto(fabrica.criarProduto("CAIXA10X10", 1));
        armazem.print();



    }
}
