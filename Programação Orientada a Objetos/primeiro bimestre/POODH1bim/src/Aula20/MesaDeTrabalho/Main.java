package Aula20.MesaDeTrabalho;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto("Shampoo", 45.30F);
        Produto p2 = new Produto("Condicionador", 25.00F);
        Produto p3 = new Produto("Desodorante", 12.40F);

        Carrinho carrinho = new Carrinho();
        carrinho.adicionar(p1);
        carrinho.adicionar(p2);
        carrinho.adicionar(p3);

        carrinho.mostrarProduto();

        carrinho.avancar();
        carrinho.voltar();

        carrinho.adicionar(p1);
        carrinho.adicionar(p2);
        carrinho.adicionar(p3);
        carrinho.cancelar();

        carrinho.adicionar(p1);
        carrinho.adicionar(p2);
        carrinho.adicionar(p3);
        carrinho.mostrarProduto();
        carrinho.avancar();
        carrinho.avancar();
        carrinho.avancar();
        carrinho.cancelar(); //não teve ação
        carrinho.voltar(); //não teve ação
        carrinho.avancar();
    }
}
