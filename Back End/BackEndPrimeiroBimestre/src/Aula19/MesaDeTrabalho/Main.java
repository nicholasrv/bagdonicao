package Aula19.MesaDeTrabalho;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Contato> contatos= new ArrayList<>();

        Contato contato1 = new Contato("Michel", "michel@gmail.com", "999223590");
        Contato contato2 = new Contato("Guilherme", "guilherme@gmail.com", "922354216");
        Contato contato3 = new Contato("Nicholas", "nicholhas@gmail.com", "999274512");

        contatos.add(contato1);
        contatos.add(contato2);
        contatos.add(contato3);

        FileOutputStream fo = null;

        try {
            fo = new FileOutputStream("ContatosFile.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fo);

            objectOutputStream.writeObject(contatos);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<Contato> contatos2 = null;
        FileInputStream fi = null;

        try{
            fi = new FileInputStream("ContatosFile.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fi);

            contatos2 = (ArrayList) objectInputStream.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Contato contato:contatos2){
            System.out.println(contato.toString());
        }
    }
}
