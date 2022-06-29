package Aula11.ExercicioAnimal;

public class Cavalo extends Animal {

    ///construtor///

    public Cavalo(String nome, int idade) {
        super(nome, idade);
    }

    /// métodos ///

    @Override
    public String emitirSom() {
        String som = "HIIIN IN IN";
        return som;
    }

    @Override
    public String correr() {
        String str = "Galopando como um Cavalo!";
        return str;
    }

}
