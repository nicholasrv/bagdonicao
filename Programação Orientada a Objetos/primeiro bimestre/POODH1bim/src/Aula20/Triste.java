package Aula20;

public class Triste implements Estado {

    Tamagochi t;

    public Triste(Tamagochi t) {
        this.t = t;
        System.out.println("Triste");
    }

    @Override
    public void comer() {
        System.out.printf("Beep. beep. Tamagochi está vomitando");
    }

    @Override
    public void beber() {
        System.out.println("Pisca pisca!! Beep. Beep. Beep.");
    }

    @Override
    public void fazerCarinho() {
        t.setEstado(new Feliz(t));
    }
}

