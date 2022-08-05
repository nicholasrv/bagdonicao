package Aula24;

import java.util.ArrayList;

public class Carreira extends OfertaAcademica {

    private double precoBase = 0;
    private ArrayList<OfertaAcademica> ofertasAcademicas = new ArrayList<>();

    public void adicionarCarreira(OfertaAcademica ofertaAcademica) throws  Exception{
        if(ofertaAcademica instanceof Curso){
            if(((Curso)ofertaAcademica).getCargaHoraria() < 10){
                throw new Exception("Não permite inserir cursos com menos de 10 horas");
            }
        }
        ofertasAcademicas.add(ofertaAcademica);
    }




    @Override
    public double calcularPreco() {
        double total  = 0;

        for(OfertaAcademica oferta: ofertasAcademicas){
            total += oferta.calcularPreco();
        }

        return total + precoBase;
    }


    public double getPrecoBase() {
        return precoBase;
    }

    public void setPrecoBase(double precoBase) {
        this.precoBase = precoBase;
    }

    public ArrayList<OfertaAcademica> getOfertasAcademicas() {
        return ofertasAcademicas;
    }

    public void setOfertasAcademicas(ArrayList<OfertaAcademica> ofertasAcademicas) {
        this.ofertasAcademicas = ofertasAcademicas;
    }
}
