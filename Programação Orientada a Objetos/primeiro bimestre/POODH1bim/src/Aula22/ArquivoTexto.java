package Aula22;

public class ArquivoTexto extends Arquivo {

    public ArquivoTexto(String nome) {
        super(nome);
    }

    @Override
    public void mostrar() {
        System.out.println("o nome é"+ getNome());
    }

}
