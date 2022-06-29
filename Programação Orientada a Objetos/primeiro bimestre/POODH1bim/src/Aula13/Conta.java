package Aula13;

public abstract class Conta {

    ///atributos

    private Double saldo;


    /// metodos

    public void depositar (Double valor){
        System.out.println("Deposito de R$ " + valor);
    }

    public abstract void sacar(Double valor);

    public Double informarSaldo(){
        return saldo;
    }


    ////GETTERS AND SETTERS

    public Double getSaldo() {
        return saldo;
    }

    public Conta(double saldo){
        this.saldo = saldo;
    }


}
