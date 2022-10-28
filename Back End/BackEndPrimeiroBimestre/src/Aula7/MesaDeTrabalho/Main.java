import Aula7.MesaDeTrabalho.Arvore;
import Aula7.MesaDeTrabalho.ArvoreFactory;

public class Main {
    public static void main(String[] args) {

        ArvoreFactory arvore = new ArvoreFactory();

        Arvore ornamental1 = arvore.getArvore("ornamental", 200, 400, "verde");
        Arvore ornamental2 = arvore.getArvore("ornamental", 200, 400, "verde");
        Arvore ornamental3 = arvore.getArvore("ornamental", 200, 400, "verde");

        Arvore frutifera1 = arvore.getArvore("frutifera", 500, 300, "vermelho");
        Arvore frutifera2 = arvore.getArvore("frutifera", 500, 300, "vermelho");
        Arvore frutifera3 = arvore.getArvore("frutifera", 500, 300, "vermelho");

        Arvore florifera1 = arvore.getArvore("florifera", 100, 200, "azul");
        Arvore florifera2 = arvore.getArvore("florifera", 100, 200, "azul");
        Arvore florifera3 = arvore.getArvore("florifera",  100, 200, "azul");


        System.out.println(ornamental1.toString());
        System.out.println(frutifera1.toString());
        System.out.println(florifera1.toString());

        Runtime runtime = Runtime.getRuntime();
        System.out.println("Memória utilizada: " + (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024));


    }
}
