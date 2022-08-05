package Aula20.MesaDeTrabalho;

import java.util.ArrayList;

public class Pagando implements Estado{
    Carrinho t;

    public Pagando(Carrinho t) {
        this.t = t;
        System.out.println("Estado: Pagando");
    }

    @Override
    public void adicionar(ArrayList<Produto> listaProduto) {
       //sem mudança
    }

    @Override
    public void cancelar() {
        t.setEstado(new Vazio(t));
    }

    @Override
    public void voltar() {
        t.setEstado(new Carregando(t));
    }

    @Override
    public void avancar() {
        t.setEstado(new Fechando(t));
    }
}
