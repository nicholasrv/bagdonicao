package Aula14;

public class Main {
    public static void main(String[] args) {
        Equipe equipe = new Equipe("Santos Futebol Clube");

        Jogador jogador1 = new Jogador(9, "Viegas ", false, true);
        Jogador jogador2 = new Jogador(10, "Ricardo Goulart ", true, true);
        Jogador jogador3 = new Jogador(7, "Lucas Braga ", false, true);
        Jogador jogador4 = new Jogador(8, "Giovanni ", false, true);

        equipe.addJogador(jogador1);
        equipe.addJogador(jogador2);
        equipe.addJogador(jogador3);
        equipe.addJogador(jogador4);

        equipe.mostrarJogadoresTitulares();

        System.out.println("Quantidade de jogadores lesionados  " + equipe.getQuantidadeJogadoresLesionados());

        jogador1.compareTo(jogador4);
        jogador3.compareTo(jogador2);
    }
}
