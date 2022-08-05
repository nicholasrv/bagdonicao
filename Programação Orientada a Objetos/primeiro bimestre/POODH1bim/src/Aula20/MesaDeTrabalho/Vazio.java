package Aula20.MesaDeTrabalho;


import java.util.ArrayList;

public class Vazio implements Estado{

    Carrinho t;

    public Vazio(Carrinho t) {
        this.t = t;
        System.out.println("Estado: vazio");
    }

    @Override
    public void adicionar(ArrayList<Produto> listaProduto) {
        //sem ação
    }

    @Override
    public void cancelar() {
        t.setEstado(new Vazio(t));
    }

    @Override
    public void voltar() {
        //sem ação
    }

    @Override
    public void avancar() {
        t.setEstado(new Carregando(t));
    }
}
