package Aula14;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Equipe {

    ///attributes

    private String nome;

    //sintaxe para criação da array list (poderia ser list mas arraylist é mais comum)
    ArrayList<Jogador>listaJogadores = new ArrayList<>();


    /// constructor

    public Equipe(String nome) {
        this.nome = nome;
    }

    ///methods
    public void addJogador (Jogador jogador){
        listaJogadores.add(jogador); // adiciona na lista de arrays
    }

    public void mostrarJogadoresTitulares(){
        Collections.sort(listaJogadores); // percorre listas de forma ordenada - Se eu quiser percorrer em ordem descrescente, devo usar o metodo reverseorder.

        for(Jogador jogador: listaJogadores){
            if(jogador.isTitular()){
               System.out.println("Nome: " + jogador.getNome() + jogador.getNumeroCamisa()); // Nessa estrutura de sintaxe, temos algo próximo de um for each.
            }
        }
    }

    public int getQuantidadeJogadoresLesionados(){
        int quantidadeJogadoresLesionados = 0;
        for (Jogador jogador: listaJogadores){
            if(jogador.isLesionado() && jogador.isTitular()){
                quantidadeJogadoresLesionados++;
            }
        }
        return quantidadeJogadoresLesionados;
    }


    ///getters + setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
