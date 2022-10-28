package Aula10.MesaDeTrabalho;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class Main {

    private static final Logger logger = Logger.getLogger(Aula10.MesaDeTrabalho.Main.class);

    public static void main(String args[]) throws Exception{
        BasicConfigurator.configure();

        List<Integer> listaInteiros = new ArrayList<>();
        listaInteiros.add(10);
        listaInteiros.add(10);
        listaInteiros.add(10);
        listaInteiros.add(10);
        listaInteiros.add(10);
        listaInteiros.add(10);
        listaInteiros.add(10);

        Inteiros i = new Inteiros(listaInteiros);

        try{
            i.calculoDeItens();
        } catch (Exception e){
            e.printStackTrace();
        }

        List <Integer> listaInteiros1 = new ArrayList<>();

        Inteiros i1 = new Inteiros(listaInteiros1);

        try{
            i1.calculoDeItens();
        } catch (Exception e){
            e.printStackTrace();
        }
}

}
