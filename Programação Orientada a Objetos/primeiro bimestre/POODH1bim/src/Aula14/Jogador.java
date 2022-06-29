package Aula14;

public class Jogador implements Comparable<Jogador> {

    ///ATTRIBUTES
    private int numeroCamisa;
    private String nome;
    private boolean lesionado;
    private boolean titular;

    /// CONSTRUCTOR

    public Jogador(int numeroCamisa, String nome, boolean lesionado, boolean titular) {
        this.numeroCamisa = numeroCamisa;
        this.nome = nome;
        this.lesionado = lesionado;
        this.titular = titular;
    }


    //// GETTERS + SETTERS

    public int getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(int numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isLesionado() {
        return lesionado;
    }

    public void setLesionado(boolean lesionado) {
        this.lesionado = lesionado;
    }

    public boolean isTitular() {
        return titular;
    }

    public void setTitular(boolean titular) {
        this.titular = titular;
    }


    /// compareTo - Comparar dois objetos. Neste caso queremos comparar os numeros de camisa dos jogadores do case
    /// Para verificar se é menor que, retorno de numero negativo menor que zero
    /// Para verificar se é igual, retorno 0
    /// Para verificar se é maior, retorno 1

    @Override
    public int compareTo(Jogador o) {
        if(o.numeroCamisa == this.numeroCamisa){
            System.out.println("Os jogadores sao iguais");
            return 0;
        }
        else if(o.numeroCamisa < this.numeroCamisa){
            System.out.println("Um jogador eh menor que o outro!");
            return -1;
        }
        else{
            System.out.println("Um jogador eh maior que o outro!");
            return 1;
        }
    }
}
