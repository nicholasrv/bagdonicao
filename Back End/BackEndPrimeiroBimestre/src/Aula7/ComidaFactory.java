package Aula7;

import java.util.HashMap;
import java.util.Objects;

public class ComidaFactory {
    private static final HashMap<String, Comida> COMIDA_MAP = new HashMap<>();

    public Comida getComida(final String tipoComida) {
        Comida comida = COMIDA_MAP.get(tipoComida);
        if (Objects.isNull(comida)) {
            comida = new Comida(tipoComida);
            COMIDA_MAP.put(tipoComida, comida);
            System.out.println("Criando Objeto de comida tipo: " + tipoComida);
            return comida;

        }
        System.out.println("Recuperando Objeto de comida tipo: " + tipoComida);
        return comida;

    }
}
