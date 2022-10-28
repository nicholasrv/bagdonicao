package Aula19;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args){
        List<Cachorro> cachorros = new ArrayList<>();

        Cachorro cachorro1 = new Cachorro("Musk",1);
        Cachorro cachorro2 = new Cachorro("Pipoca", 11);
        Cachorro cachorro3 = new Cachorro("Greg", 2);

        cachorros.add(cachorro1);
        cachorros.add(cachorro2);
        cachorros.add(cachorro3);

        FileOutputStream fo = null;
        try {
            fo = new FileOutputStream("CachorrosFile.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fo);

            objectOutputStream.writeObject(cachorros);
        } catch (FileNotFoundException e){
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<Cachorro> cachorros2 = null;
        FileInputStream fi = null;

        try {
            fi = new FileInputStream("CachorrosFile.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fi);

            cachorros2 = (ArrayList)objectInputStream.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Cachorro cachorro:cachorros2){
            System.out.println(cachorro.toString());
        }
    }
}
