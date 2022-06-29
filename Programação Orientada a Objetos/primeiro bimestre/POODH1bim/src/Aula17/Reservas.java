package Aula17;

public class Reservas {

    private String codigo;
    private int quantidadePassageiros;
    private String estacaoOrigem;
    private String estacaoDestino;

    public double getPreco() {
        double preco = 50 * quantidadePassageiros;
        if(estacaoOrigem == "BUENOS AIRES" && estacaoDestino == "BRAGADO") {
            preco -= (preco * 0.2);
        }
        return preco;
    }

    private boolean estavaCompleto(){
        return estacaoOrigem == "BUENOS AIRES" && estacaoDestino == "BRAGADO";
    }

    public Reservas() { }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public int getQuantidadePassageiros() {
        return quantidadePassageiros;
    }

    public void setQuantidadePassageiros(int quantidadePassageiros) {
        this.quantidadePassageiros = quantidadePassageiros;
    }

    public String getEstacaoOrigem() {
        return estacaoOrigem;
    }

    public void setEstacaoOrigem(String estacaoOrigem) {
        this.estacaoOrigem = estacaoOrigem;
    }

    public String getEstacaoDestino() {
        return estacaoDestino;
    }

    public void setEstacaoDestino(String estacaoDestino) {
        this.estacaoDestino = estacaoDestino;
    }
}
