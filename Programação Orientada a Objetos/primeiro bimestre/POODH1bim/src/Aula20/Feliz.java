package Aula20;

public class Feliz implements Estado {

    //criar um atributo do tipo da classe principal(contexto)
    Tamagochi t;

    // Construtor que injeta a dependência na classe atual
    public Feliz(Tamagochi t) {
        this.t = t;
        System.out.println("Feliz");
    }

    @Override
    public void comer() {
        //sem qualquer mudança
    }

    @Override
    public void beber() {
        System.out.printf("Beep. Beep. Beep. Beep. Beep");
    }

    @Override
    public void fazerCarinho() {
        //sem qualquer mudança
    }
}

