package Aula16.MaterialDiana;

public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente("Leila", "Sales", "12345", 100);
        try {
            cliente.comprar(500);
        }catch (ClienteException e){
            System.err.println(e);
        }

    }
}
