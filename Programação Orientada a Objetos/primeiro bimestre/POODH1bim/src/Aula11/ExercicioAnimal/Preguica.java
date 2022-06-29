package Aula11.ExercicioAnimal;

public class Preguica extends Animal {

    ///construtor///

    public Preguica(String nome, int idade) {
        super(nome, idade);
    }

    /// métodos ///

    @Override
    public String emitirSom() {
        String som = "HAAAAN, HAAAAAAANNNN";
        return som;
    }

    public String subirEmArvores() {
        return "Subindo na arvore!";
    }
}