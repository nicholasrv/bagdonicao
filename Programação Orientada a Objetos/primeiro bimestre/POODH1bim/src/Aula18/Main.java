package Aula18;

import java.util.Date;

public class Main {
    public static void main(String[] args) {
        try {
            Paciente paciente = new Paciente("Juan", "Perez", new Date(2022, 6, 29));
            paciente.darAlta(new Date(2022, 6, 28));
        } catch (PacienteException e) {
            e.printStackTrace();
        }
    }
}
