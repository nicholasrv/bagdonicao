package Aula11.ExercicioAnimal;

public abstract class  Animal {

    ///atributos///

    private String nome;
    private int idade;


    /// construtor ///

    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    /// métodos ///

    public abstract String emitirSom();

    public String correr() {
        String str = "Correndo na velocidade da luz!";
        return str;

    }

    /// getters n setters ///


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
