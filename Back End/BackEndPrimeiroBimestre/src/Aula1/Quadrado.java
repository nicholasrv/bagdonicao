package Aula1;

public class Quadrado extends Figura {

    public Quadrado(String tipo, Double medida) {
        super(tipo, medida);
    }
    @Override
    public Double calcularPerimetro() {

        return 4 * getMedida();
    }
}
