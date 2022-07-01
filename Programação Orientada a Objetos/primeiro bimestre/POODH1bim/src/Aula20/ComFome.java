package Aula20;

public class ComFome implements Estado {

    Tamagochi t;

    public ComFome(Tamagochi t) {
        this.t = t;
        System.out.println("Com fome");
    }

    @Override
    public void comer() {
        t.setEstado(new Feliz(t));
    }

    @Override
    public void beber() {
        //sem mudança
    }

    @Override
    public void fazerCarinho() {
        //sem mudança
    }
}

