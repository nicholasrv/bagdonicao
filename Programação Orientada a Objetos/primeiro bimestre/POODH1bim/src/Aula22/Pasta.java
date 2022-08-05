package Aula22;

import java.util.ArrayList;

public class Pasta extends Arquivo{

    ArrayList<Arquivo> listaArquivos = new ArrayList<>();

    public Pasta(String nome) {
        super(nome);
    }

    public void addArquivo(Arquivo arquivo){
        listaArquivos.add(arquivo);
    }

    public void removerArquivo(Arquivo arquivo){
        listaArquivos.remove(arquivo);
    }

    @Override
    public void mostrar() {
        for (Arquivo arquivo: listaArquivos){
            System.out.println(arquivo.getNome());
        }
    }

    public ArrayList<Arquivo> getListaArquivos() {
        return listaArquivos;
    }

    public void setListaArquivos(ArrayList<Arquivo> listaArquivos) {
        this.listaArquivos = listaArquivos;
    }
}
