package Aula13;

public class ContaPoupanca extends Conta {

    public ContaPoupanca(double saldo) {
        super(saldo);
    }

    @Override
    public void sacar(Double valor) {
        if(valor <= getSaldo()){
            System.out.println("Saque de R$ " + valor + " efetuado com sucesso!");
        }

        else{
            System.out.println("Saldo insuficiente para saque");
        }
    }


    public void cobrarJuros(){
        Double juro = 0.5/100;
        System.out.println("Juros são de 0,5%, valor R$ " + getSaldo() * juro );
    }






}
