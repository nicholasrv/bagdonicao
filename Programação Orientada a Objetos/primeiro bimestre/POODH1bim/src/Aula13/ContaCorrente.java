package Aula13;

public class ContaCorrente extends Conta implements GravarImposto{

    private Double valorPermitido;

    public ContaCorrente(double saldo, double valorPermitido) {
        super(saldo);
        this.valorPermitido = valorPermitido;
    }

    @Override
    public void sacar(Double valor) {

        if(valor <= valorPermitido && getSaldo() >= valor){
        System.out.println("Saque de R$ " + valor + " efetuado com sucesso!");
        }
        else{
            System.out.println("Saldo insuficiente para saque");
        }
    }

    @Override
    public void imposto(Double porcentagem) {
        double porcent = porcentagem / 100;
        double descontoImposto = getSaldo() * porcent;
        System.out.println("Saldo com desconto de imposto é de R$ " + (getSaldo() - descontoImposto) + ". Desconto de R$" + descontoImposto);

    }
}
