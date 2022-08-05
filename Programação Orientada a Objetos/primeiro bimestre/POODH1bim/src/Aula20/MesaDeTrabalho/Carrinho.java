package Aula20.MesaDeTrabalho;

import java.util.ArrayList;

public class Carrinho {
    private ArrayList<Produto> listaProdutos = new ArrayList<>();

    private Estado estado;

    public Carrinho() {
        this.setEstado(new Vazio(this));
    }

    public void adicionar(Produto produto) {
        listaProdutos.add(produto);
        getEstado().adicionar(listaProdutos);
    }

    public void cancelar() {
        getEstado().cancelar();
    }

    public void voltar() {
        getEstado().voltar();
    }

    public void avancar() {
        getEstado().avancar();
    }

    public void mostrarProduto(){
        for (Produto produto : listaProdutos){
            System.out.println("Produto: " + produto.getDescricao()
                    + " custa R$" + produto.getPreco());
        }
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public ArrayList<Produto> getListaProdutos() {
        return listaProdutos;
    }

    public void setListaProdutos(ArrayList<Produto> listaProdutos) {
        this.listaProdutos = listaProdutos;
    }
}
