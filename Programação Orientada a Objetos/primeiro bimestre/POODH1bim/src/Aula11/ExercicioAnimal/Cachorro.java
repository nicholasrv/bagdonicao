package Aula11.ExercicioAnimal;

public class Cachorro extends Animal {

    ///construtor///

    public Cachorro(String nome, int idade) {
        super(nome, idade);
    }

    /// métodos ///

    @Override
    public String emitirSom() {
        String som = "AU AU AU!";
        return som;
    }

    @Override
    public String correr() {
        String str = "Correndo como um cachorro!";
        return str;
    }

}
