package Aula13;

public class Main {

    public static void main(String[] args) {
        ContaCorrente cc = new ContaCorrente(5597.00, 5597.00);
        cc.sacar(800.00);
        cc.imposto(3.0);

        ContaCorrente cp = new ContaCorrente(6500.80, 6500.80);
        cp.sacar(50.00);
        cp.depositar(60.0);
    }
}
