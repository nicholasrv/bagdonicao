package Aula19;

public class Bola extends Produto {
    private double raio;

    public Bola(double peso, double raio) {
        super(peso);
        this.raio = raio;
    }

    @Override
    public double getPeso() {
        return super.getPeso();
    }

    @Override
    public double calcularEspaco() {
        return 3.14 * (raio * raio);
    }
}
