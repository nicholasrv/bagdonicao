package Aula16.MaterialDiana.ExcecoesPersonalizadas;

public class Main {
    public static void main(String[] args) {
        try {
            Data data = new Data(2, 2, 2022);
            System.out.println(data);
        } catch (DataException e) {
            e.printStackTrace();
        }
    }
}
