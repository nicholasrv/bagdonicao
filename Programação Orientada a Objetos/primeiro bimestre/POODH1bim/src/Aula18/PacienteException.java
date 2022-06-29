package Aula18;

public class PacienteException extends Exception {

    public PacienteException() {
    }

    public PacienteException(String message) {
        super(message);
    }

    @Override
    public String toString() {
        return getMessage();
    }
}
