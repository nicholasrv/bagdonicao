package Aula16.MaterialDiana;

public class ClienteOriginalDispnibilizadaAlunosNaAtividade {

    private String nome;
    private String sobrenome;
    private String rg;
    private double saldoEmConta;
    private double limite;

    public ClienteOriginalDispnibilizadaAlunosNaAtividade(String nome, String sobrenome, String rg, double limite) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.limite= limite;
        saldoEmConta=0;

    }
    public void comprar(double valor) {
        saldoEmConta+=valor;
    }
    public void pagarDivida(double valor) {
        saldoEmConta-=valor;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                nome + ' ' +
                sobrenome + ' ' +
                ", seu saldo é=" + saldoEmConta + "R$ }";
    }
}
