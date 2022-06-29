package Aula16;

public class Main {

    public static void main(String[] args){
        ClienteDoPG cliente1 = new ClienteDoPG("João", "Silva", "39.485.797-5", 500.00);

        try {
            cliente1.compra(700.00);
        } catch (ClientesException e) {
            e.printStackTrace();
        }

    }

}
