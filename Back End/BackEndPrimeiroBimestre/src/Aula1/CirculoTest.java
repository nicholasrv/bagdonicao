package Aula1;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CirculoTest {

    Circulo circulo1;

    @BeforeEach
    void doBefore(){
        Circulo circulo1 = new Circulo("Circulo", 15.5);
    }

    @Test
    Double testePerimetro(){
        Double resultado = circulo1.calcularPerimetro();
        return resultado;
    }

}