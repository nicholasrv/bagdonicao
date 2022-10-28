package Aula7.MesaDeTrabalho;

public class Arvore {

    private String tipoArvore;
    private int altura;
    private int largura;
    private String cor;

    private static int contador;

    public Arvore(String tipoArvore, int altura, int largura, String cor){
        super();
        this.tipoArvore = tipoArvore;
        this.altura = altura;
        this.largura = largura;
        this.cor = cor;
        contador++;
        System.out.println("\nContador: " + contador);
    }

    public String getTipoArvore() {
        return tipoArvore;
    }

    public void setTipoArvore(String tipoArvore) {
        this.tipoArvore = tipoArvore;
    }

    public int getAltura() {
        return altura;
    }

    public void setAltura(int altura) {
        this.altura = altura;
    }

    public int getLargura() {
        return largura;
    }

    public void setLargura(int largura) {
        this.largura = largura;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public static int getContador() {
        return contador;
    }

    public static void setContador(int contador) {
        Arvore.contador = contador;
    }

    @Override
    public String toString() {
        return "Arvore{" +
                "tipoArvore='" + tipoArvore + '\'' +
                ", altura=" + altura +
                ", largura=" + largura +
                ", cor='" + cor + '\'' +
                '}';
    }
}
