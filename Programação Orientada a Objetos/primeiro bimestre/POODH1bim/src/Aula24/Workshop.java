package Aula24;

public class Workshop extends OfertaAcademica {

    private int quantidade;
    private double valor;

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    @Override
    public double calcularPreco() {
        return quantidade * valor;
    }
}
