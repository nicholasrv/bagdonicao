package Aula22;

public abstract class Arquivo {
    private String nome;

    public Arquivo(String nome) {
        this.nome = nome;
    }

    public abstract void mostrar();

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
