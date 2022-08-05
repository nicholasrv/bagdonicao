package Aula24;

import java.util.ArrayList;

public class Instituto {

    private String nome;
    private ArrayList<OfertaAcademica> ofertas = new ArrayList<>();

    public Instituto(String nome) {
        this.nome = nome;
    }

    public void adicionar(OfertaAcademica o){
        ofertas.add(o);
    }

    public void gerarInformeOferta(){
        for(OfertaAcademica oferta: ofertas){
            System.out.println("Tipo de Oferta: " + oferta.getClass().getName() + ". Descrição: "  + oferta.getNome() + ". Preço: " + oferta.calcularPreco());
        }
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public ArrayList<OfertaAcademica> getOfertas() {
        return ofertas;
    }

    public void setOfertas(ArrayList<OfertaAcademica> ofertas) {
        this.ofertas = ofertas;
    }
}
