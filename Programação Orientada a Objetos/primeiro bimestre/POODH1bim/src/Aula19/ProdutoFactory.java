package Aula19

public class ProdutoFactory {

    private static ProdutoFactory instance;

    private ProdutoFactory(){

    }

    public static ProdutoFactory getInstance(){
        if (instance == null){
            instance = new ProdutoFactory();
        }
        return instance;
    }

    public Produto criarProduto (String tipo, double peso){

        if(tipo.equals("CAIXA10X10")){
            return new Caixa(peso, 10, 10, 10);
        } else if (tipo.equals ("FUTEBOL")){
            return new Bola(peso, 11);
        } else if (tipo.equals("BOLATENIS")){
            return new Bola(peso,0.32);
        }
        return null;
    }
}

