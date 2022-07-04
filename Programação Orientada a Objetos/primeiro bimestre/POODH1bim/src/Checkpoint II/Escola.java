package Hogwarts;

public class Escola {

    private String nome;
    private String pais;
    private String diretor;
    private int anoFundacao;


    public Escola(String nome, String pais, String diretor, int anoFundacao) {
        this.nome = nome;
        this.pais = pais;
        this.diretor = diretor;
        this.anoFundacao = anoFundacao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public int getAnoFundacao() {
        return anoFundacao;
    }

    public void setAnoFundacao(int anoFundacao) {
        this.anoFundacao = anoFundacao;
    }
}

