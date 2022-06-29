import Aula15.Container;
import Aula15.Porto;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        Porto porto = new Porto("Porto Santos");

        Container container01 = new Container(1, "Desconhecido", "Desconhecido",
                true);
        Container container02 = new Container(2, "Japão", "vem do japão",
                false);
        Container container03 = new Container(3, "Guatemala", "vem da guatemala",
                false);
        Container container04 = new Container(4, "Desconhecido", "Desconhecido",
                true);
        Container container05 = new Container(5, "Desconhecido", "Desconhecido",
                true);

        porto.permitirEntrada(container05);
        porto.permitirEntrada(container03);
        porto.permitirEntrada(container01);
        porto.permitirEntrada(container04);
        porto.permitirEntrada(container02);

        porto.calculaContainersPerigosos();

        ArrayList<Container> containers = porto.mostrarContainers();

        for(Container c : containers){
            System.out.println(c.getId());
            System.out.println(c.getPaisOrigem());
            System.out.println(c.getDescricao());
        }

    }
}
