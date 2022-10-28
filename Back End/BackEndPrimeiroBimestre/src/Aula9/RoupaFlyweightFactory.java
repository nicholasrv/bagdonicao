package Aula9;

import java.util.HashMap;

public class RoupaFlyweightFactory {

    public static final HashMap<String, Roupa> roupaMap = new HashMap<>();

    public static Roupa obterRoupa(String tamanho, String tipoRoupa, boolean importada, boolean eNovo) {

        String roupaId = tamanho+tipoRoupa+importada+eNovo;
        Roupa roupa =  roupaMap.get(roupaId);

        if (roupa == null) {
            roupaMap.put(roupaId, new Roupa(tamanho, tipoRoupa, eNovo, importada));
            return roupaMap.get(roupaId);
        }

        return roupa;
    }

    public int medirTamanhoFabrica(){
        return roupaMap.size();
    }

}
