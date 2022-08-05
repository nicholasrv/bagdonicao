package Aula24;

public class Curso extends OfertaAcademica{

    private double cargaHoraria;
    private double duracao;
    private double valorHora;

    @Override
    public double calcularPreco() {
        return cargaHoraria * duracao * valorHora;
    }


    public double getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(double cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public double getDuracao() {
        return duracao;
    }

    public void setDuracao(double duracao) {
        this.duracao = duracao;
    }

    public double getValorHora() {
        return valorHora;
    }

    public void setValorHora(double valorHora) {
        this.valorHora = valorHora;
    }
}
