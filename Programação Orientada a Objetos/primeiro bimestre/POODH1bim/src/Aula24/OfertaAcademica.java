package Aula24;

public abstract class OfertaAcademica {

    private String nome;
    private String descricao;

    public OfertaAcademica() {
    }

    public abstract double calcularPreco();

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
