//package Aula4.MesaDeTrabalho;
//
//public class CheckQuality {
//    ControleQualidade inicial;
//
//    public CheckQuality(){
//        this.inicial = new Lote();
//        ControleQualidade peso = new Peso();
//        ControleQualidade embalagem = new Embalagem();
//
//        inicial.setSeguinte(peso);
//        peso.setSeguinte(embalagem);
//    }
//
//    public void verificar(Produto produto){
//        inicial.verificar(produto);
//    }
//}