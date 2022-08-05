package Aula23;

public class Ouro implements Observador{
    @Override
    public String atualizar() {
        return this + "> Mudar de estado: ";
    }
}
