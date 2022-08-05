package Aula24;

import java.util.ArrayList;

public class ProgramaIntensivo extends OfertaAcademica{

    private double porcentagemBonificacao;
    private ArrayList<OfertaAcademica> ofertasAcademicas = new ArrayList<>();

    public void adicionar(OfertaAcademica o){
        ofertasAcademicas.add(o);
    }

    @Override
    public double calcularPreco() {
        double total = 0;

        for(OfertaAcademica oferta: ofertasAcademicas){
            total += oferta.calcularPreco();
        }

        double desconto =  porcentagemBonificacao/100 * total ;

        return total-desconto;
    }

    public double getPorcentagemBonificacao() {
        return porcentagemBonificacao;
    }

    public void setPorcentagemBonificacao(double porcentagemBonificacao) {
        this.porcentagemBonificacao = porcentagemBonificacao;
    }

    public ArrayList<OfertaAcademica> getOfertasAcademicas() {
        return ofertasAcademicas;
    }

    public void setOfertasAcademicas(ArrayList<OfertaAcademica> ofertasAcademicas) {
        this.ofertasAcademicas = ofertasAcademicas;
    }
}
