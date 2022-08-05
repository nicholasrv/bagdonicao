package Aula20.MesaDeTrabalho;

import java.util.ArrayList;

public interface Estado {
    void adicionar(ArrayList<Produto> listaProdutos);
    void cancelar();
    void voltar();
    void avancar();
}
