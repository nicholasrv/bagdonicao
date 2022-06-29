package Aula18.MesaDeTrabalho;

public class Jogador {
    private String sobrenome;
    private int numeroCamisa;
    private String posicao;
    private String status;

    public Jogador(String sobrenome, int numeroCamisa, String posicao, String status) {
        this.sobrenome = sobrenome;
        this.numeroCamisa = numeroCamisa;
        this.posicao = posicao;
        this.status = status;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public String getStatus() {
        return status;
    }

    public String getPosicao() {
        return posicao;
    }

    @Override
    public String toString(){
        return this.sobrenome+" "+this.numeroCamisa+" "+this.posicao+" "+this.status ;
    }
}
