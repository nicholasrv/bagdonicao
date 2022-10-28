package Aula1;

public class Circulo extends Figura {
    public Circulo(String tipo, Double medida) {
        super(tipo, medida);
    }
    @Override
    public Double calcularPerimetro() {
        return 2 * Math.PI * getMedida();
    }
}
