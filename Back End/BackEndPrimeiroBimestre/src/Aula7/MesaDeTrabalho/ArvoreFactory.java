package Aula7.MesaDeTrabalho;

import java.util.HashMap;
import java.util.Map;

public class ArvoreFactory {

    private static Map<String, Arvore> floresta = new HashMap<>();

    public Arvore getArvore(String tipoArvore, int altura, int largura, String cor){
        String id = "id: " + tipoArvore + " : " + altura + " : " + largura + " : " +  cor;
        System.out.println(id);

        if(!floresta.containsKey(id)){
            floresta.put(id, new Arvore(tipoArvore, altura, largura, cor));
            System.out.println("\nArvore Criada com sucesso");
            return floresta.get(id);
        }
        System.out.println("\nArvore obtida");
        return floresta.get(id);
    }
}
