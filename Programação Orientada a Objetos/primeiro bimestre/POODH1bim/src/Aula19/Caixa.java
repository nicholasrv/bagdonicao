package Aula19;

public class Caixa extends Produto {
    private double comprimento;
    private double altura;
    private double largura;

    public Caixa (double peso) {
        super(peso);
    }
    public Caixa(double peso, double comprimento, double altura, double largura) {
        super(peso);
        this.comprimento = comprimento;
        this.altura = altura;
        this.largura = largura;
    }

    @Override
    public double getPeso() {
        return super.getPeso();
    }

    @Override
    public double calcularEspaco() {
        return this.altura * this.comprimento * this.largura;
    }
}
