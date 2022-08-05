package Aula20.MesaDeTrabalho;

import java.util.ArrayList;

public class Fechando implements Estado{

    Carrinho c;

    public Fechando(Carrinho c) {
        this.c = c;
        System.out.println("Estado: Fechando");
    }

    @Override
    public void adicionar(ArrayList<Produto> listaProduto) {
        //sem mudança
    }

    @Override
    public void cancelar() {
        //sem mudança ou vazio dependendo da situação
        //t.setEstado(new Vazio(t));
    }

    @Override
    public void voltar() {
        //sem mudança
    }

    @Override
    public void avancar() {
        c.setEstado(new Vazio(c));
    }
}
