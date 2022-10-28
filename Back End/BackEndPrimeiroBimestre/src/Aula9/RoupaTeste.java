package Aula9;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

public class RoupaTeste {

    ArrayList<Roupa> roupasXS = new ArrayList<>();
    ArrayList<Roupa> roupasS = new ArrayList<>();
    ArrayList<Roupa> roupasM = new ArrayList<>();
    ArrayList<Roupa> roupasImp = new ArrayList<>();
    ArrayList<Roupa> roupasMasCond = new ArrayList<>();

    RoupaFlyweightFactory roupaFactory = new RoupaFlyweightFactory();

    @Test
    public void doTest(){
        addRoupa(new Roupa("M", "Camisa", true, true));
        addRoupa(new Roupa("M", "Calça", true, true));
        addRoupa(new Roupa("M", "Calça", true, false));
        addRoupa(new Roupa("M", "Calça", true, false));
        addRoupa(new Roupa("M", "Calça", true, true));
        addRoupa(new Roupa("M", "Calça", true, true));
        addRoupa(new Roupa("S", "Camisa", true, true));
        addRoupa(new Roupa("S", "Short", true, true));
        addRoupa(new Roupa("S", "Camisa", true, true));
        addRoupa(new Roupa("XS", "Tanga", true, true));
        addRoupa(new Roupa("XS", "Short", true, true));
        addRoupa(new Roupa("XS", "Tanga", true, true));

        System.out.println("Numero de Pedidos M: "+numeroPedidosTamanho(roupasM));
        System.out.println("Numero de Pedidos Importados: "+numeroPedidosTamanho(roupasImp));
        System.out.println("Quantidade de pedidos para fábrica: "+numeroPedidos());
        System.out.println("Tamanho necessário da Fábrica: "+roupaFactory.medirTamanhoFabrica());
    }

    public int numeroPedidos(){
        return roupasM.size()+roupasS.size()+roupasXS.size();
    }

    public int numeroPedidosTamanho(ArrayList roupa){
        return roupa.size();
    }

    public void addRoupa(Roupa roupa){
        if(roupa.getTamanho()=="XS"){
            roupasXS.add(roupaFactory.obterRoupa(roupa.getTamanho(), roupa.getTipo(), roupa.isImportado(), roupa.iseNovo()));
        }
        else if (roupa.getTamanho()=="S"){
            roupasS.add(roupaFactory.obterRoupa(roupa.getTamanho(), roupa.getTipo(), roupa.isImportado(), roupa.iseNovo()));
        }
        else{
            roupasM.add(roupaFactory.obterRoupa(roupa.getTamanho(), roupa.getTipo(), roupa.isImportado(), roupa.iseNovo()));
        }

        if(roupa.iseNovo()==false){
            roupasMasCond.add(roupaFactory.obterRoupa(roupa.getTamanho(), roupa.getTipo(), roupa.isImportado(), roupa.iseNovo()));
        }

        if(roupa.isImportado()==true) {
            roupasImp.add(roupaFactory.obterRoupa(roupa.getTamanho(), roupa.getTipo(), roupa.isImportado(), roupa.iseNovo()));
        }
    }
}
