package Aula20;

public class ComSede implements Estado {

    Tamagochi t;


    public ComSede(Tamagochi t) {
        this.t = t;
        System.out.println("Com sede");
    }

    @Override
    public void comer() {
        //sem mudança
    }

    @Override
    public void beber() {
        t.setEstado(new Feliz(t));
    }

    @Override
    public void fazerCarinho() {
        //sem mudança
    }
}
