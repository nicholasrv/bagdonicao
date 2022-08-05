package Aula20.MesaDeTrabalho;

import java.util.ArrayList;

public class Carregando implements Estado{

    Carrinho t;

    public Carregando(Carrinho t) {
        this.t = t;
        System.out.println("Estado: Carregando");
        //adicionar(t.getListaProdutos());
    }

    @Override
    public void adicionar(ArrayList<Produto> listaProduto) {
        t.setEstado(new Carregando(t));
    }

    @Override
    public void cancelar() {
        t.setEstado(new Vazio(t));
    }

    @Override
    public void voltar() {
        t.setEstado(new Vazio(t));
    }

    @Override
    public void avancar() {
        t.setEstado(new Pagando(t));
    }
}
