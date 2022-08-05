package Aula23;

import Aula23.Observador;

import java.util.ArrayList;
;

public class Quadro implements Observer {
    private ArrayList<Observador> observadores = new ArrayList<>();
    private float precoAtual;

    public void mudarPreco(float preco){
        this.precoAtual = preco;
        notificar(" preço atualizado para " + obtenerPreco());
    }

    public float obtenerPreco(){
        return precoAtual;
    }

    @Override
    public void adicionar(Observador o) {
        this.observadores.add(o);
    }

    @Override
    public void remover(Observador o) {
        this.observadores.remove(o);
    }

    @Override
    public void notificar(String mudar) {
        for(Observador o : observadores)
            System.out.println(o.atualizar() + mudar);
    }
}
