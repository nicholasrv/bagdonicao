package Aula20;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Object> empresa1 = new ArrayList<>();

        Empresa empresa = new Empresa("aaaabbbbccccdddd", "JBL");

        Funcionario funcionario1 = new Funcionario("Michel", "Nunes", "6710822", 20000.50);
        Funcionario funcionario2 = new Funcionario("Guilherme", "Carvalho", "6710820", 2000.50);
        Funcionario funcionario3 = new Funcionario("Taynan", "Vitor", "6710821", 200000.50);

        empresa1.add(empresa);
        empresa1.add(funcionario1);
        empresa1.add(funcionario2);
        empresa1.add(funcionario3);

        FileOutputStream fo = null;

        try {
            fo = new FileOutputStream("Empresa1File.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fo);

            objectOutputStream.writeObject(empresa1);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<Object> empresa2 = null;
        FileInputStream fi = null;

        try {
            fi = new FileInputStream("Empresa1File.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fi);

            empresa2 = (ArrayList) objectInputStream.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        empresa2.forEach((n) -> System.out.println(n.toString()));
    }
}
