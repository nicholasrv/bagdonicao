package Aula22;

public class ArquivoVideo extends Arquivo{

    public ArquivoVideo(String nome) {
        super(nome);
    }

    @Override
    public void mostrar() {
        System.out.println("O nome é "+ getNome());
    }

}
