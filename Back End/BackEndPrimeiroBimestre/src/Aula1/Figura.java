package Aula1;

public abstract class Figura {

    private String tipo;
    private Double medida;

    public Figura(String tipo, Double medida) {
        this.tipo = tipo;
        this.medida = medida;
    }

    public Double getMedida() {
        return medida;
    }

    public abstract Double calcularPerimetro();

}
