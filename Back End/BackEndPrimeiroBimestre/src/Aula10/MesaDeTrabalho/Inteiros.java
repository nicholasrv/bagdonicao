package Aula10.MesaDeTrabalho;

import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class Inteiros {

    private static final Logger logger = Logger.getLogger(Inteiros.class);

    private List<Integer> listaInteiros;

    public Inteiros(List<Integer> listaInteiros) {
        this.listaInteiros = listaInteiros;
    }

    public void calculoDeItens() throws Exception {

         if(listaInteiros.size() == 0){
             logger.error("[ERROR] A lista é igual a zero");
             throw new Exception();
        }

        Integer soma = 0;

        for (int i : listaInteiros) {
            soma += i;
        }
        double media = 0;

        media = soma/listaInteiros.size();

        if (listaInteiros.size() > 5) {
            logger.info("[INFO] [listaMedia:"+ media + "] O comprimento da lista é maior que 5");
        } else{
            logger.info("[INFO] [listaMedia:"+ media + "] ");
        }

        if (listaInteiros.size() > 10) {
            logger.info("[INFO] [listaMedia:"+ media + "] O comprimento da lista é maior que 10");
        }

    }

}

