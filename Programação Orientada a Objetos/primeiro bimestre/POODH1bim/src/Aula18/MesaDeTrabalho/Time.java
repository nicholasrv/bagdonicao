package Aula18.MesaDeTrabalho;

import java.util.ArrayList;

public class Time {
    private String nome;
    private ArrayList<Jogador> jogadores = new ArrayList<>();

    public Time(String nome) {
        this.nome = nome;
    }

    public void setJogadores(Jogador jogador){
        this.jogadores.add(jogador);
    }

    public ArrayList<Jogador> obterReservas(){
        ArrayList<Jogador> listaReservas = new ArrayList<>();

        for(Jogador jogador : this.jogadores){
            if(jogador.getStatus()=="Reserva"){
               listaReservas.add(jogador);
            }
        }

        return listaReservas;
    }

    public int quantJogadores(String posicao){
        int quantidadeJogadoresPosicao = 0;

        for(Jogador jogador : this.jogadores){
            if(jogador.getPosicao()==posicao){
                quantidadeJogadoresPosicao++;
            }
        }

        if(quantidadeJogadoresPosicao == 0){
            throw new IllegalArgumentException("Posição de Jogador não encontrada");
        }

        return quantidadeJogadoresPosicao;
    }

}
