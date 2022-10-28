package Aula19;

import java.io.Serializable;

public class Cachorro implements Serializable {


    public String nome;
    public int idade;

    public Cachorro(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    @Override
    public String toString() {
        return "Cachorro{" +
                "nome='" + nome + '\'' +
                ", idade=" + idade +
                '}';
    }
}
