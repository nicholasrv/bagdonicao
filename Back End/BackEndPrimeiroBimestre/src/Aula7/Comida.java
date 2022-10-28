package Aula7;

public class Comida {
    private String tipoComida;
    private int preco;
    private boolean temAlface;

    public Comida(String tipoComida) {
        super();
        this.tipoComida = tipoComida;
    }

    public Comida() {
        super();
    }

    public String getTipoComida() {
        return tipoComida;
    }

    public void setTipoComida(String tipoComida) {
        this.tipoComida = tipoComida;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public boolean isTemAlface() {
        return temAlface;
    }

    public void setTemAlface(boolean temAlface) {
        this.temAlface = temAlface;
    }

    public void descricaoDaComida() {
        System.out.println("É um/uma " + getTipoComida() + " que custa: " + getPreco());
    }

    @Override
    public String toString() {
        return "Comida [tipoComida=" + tipoComida + ", preço=" + preco + ", temAlface=" + temAlface + "]";
    }
}
