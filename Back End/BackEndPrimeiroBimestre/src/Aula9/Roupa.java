package Aula9;

public class Roupa {
    public String tamanho, tipo;
    public boolean eNovo, importado;

    public Roupa(String tamanho, String tipo, boolean eNovo, boolean importado) {
        this.tamanho = tamanho;
        this.tipo = tipo;
        this.eNovo = eNovo;
        this.importado = importado;
    }

    public String getTamanho() {
        return tamanho;
    }

    public String getTipo() {
        return tipo;
    }

    public boolean iseNovo() {
        return eNovo;
    }

    public boolean isImportado() {
        return importado;
    }
}
