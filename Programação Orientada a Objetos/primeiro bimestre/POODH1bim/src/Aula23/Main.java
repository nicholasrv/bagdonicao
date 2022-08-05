package Aula23;

public class Main {
    public static void main(String[] args) {

        Quadro quadro = new Quadro();
        Observador obs1 = new Ouro();
        Observador obs2 = new Ouro();

        quadro.adicionar(obs1);
        quadro.adicionar(obs2);

        quadro.mudarPreco(42.5f);
        quadro.mudarPreco(44.3f);


    }
}
