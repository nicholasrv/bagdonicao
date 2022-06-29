package Aula18.MesaDeTrabalho;

public class Main {
    public static void main(String[] args) {
        Time time = new Time("Brasil");

        Jogador jogador1 = new Jogador("Barreto", 22, "Goleiro", "Reserva");
        Jogador jogador2 = new Jogador("Camargo", 10, "Atacante", "Titular");
        Jogador jogador3 = new Jogador("Silva", 9, "Meio Campista", "Suplente");
        Jogador jogador4 = new Jogador("Rodrigues", 12, "Meio Campista", "Titular");
        Jogador jogador5 = new Jogador("Viegas", 7, "Defensor", "Titular");
        Jogador jogador6 = new Jogador("Santos", 3, "Defensor", "Reserva");
        Jogador jogador7 = new Jogador("Vitor", 5, "Atacante", "Titular");

        time.setJogadores(jogador1);
        time.setJogadores(jogador2);
        time.setJogadores(jogador3);
        time.setJogadores(jogador4);
        time.setJogadores(jogador5);
        time.setJogadores(jogador6);
        time.setJogadores(jogador7);

        System.out.println(time.obterReservas());

        System.out.println("Jogadores na reserva");
        for(Jogador jogador : time.obterReservas()){
            System.out.println(jogador.getSobrenome()+" | "+jogador.getPosicao()+" | "+jogador.getStatus());
        }

        System.out.println("Goleiros: "+time.quantJogadores("Goleiro"));
        System.out.println("Atacantes: "+time.quantJogadores("Atacante"));
        System.out.println("Defensores: "+time.quantJogadores("Defensor"));
        System.out.println("Meio Campistas: "+time.quantJogadores("Meio Campista"));
    }
}
