package Aula16.MaterialDiana;

public class Cliente {
    private String nome;
    private String sobrenome;
    private String rg;
    private double saldoEmConta;
    private double limite;
    private double divida;

    public Cliente(String nome, String sobrenome, String rg, double limite) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.limite = limite;
        this.divida = 0;
        saldoEmConta = 0;

    }
    public void comprar(double valor) throws ClienteException {
        if ((saldoEmConta + limite) < valor){
            throw new ClienteException("Saldo insuficiente!!");
        }else{
            saldoEmConta-=valor;
        }
    }

    public void pagarDivida(double valor) throws ClienteException {
        if(divida <= 0){
            throw new ClienteException("Você não tem divida!!");
        }else {
            divida-=valor;
        }


    }

    @Override
    public String toString() {
        return "Cliente{" +
                nome + ' ' +
                sobrenome + ' ' +
                ", seu saldo é=" + saldoEmConta + "R$ }";
    }
}
