package Aula6.MesaDeTrabalho;

public class SerieNaoHabilitadaException extends RuntimeException {
    @Override
    public String getMessage() {
        return "Excede o número de reproduções permitidas (5).";
    }
}
