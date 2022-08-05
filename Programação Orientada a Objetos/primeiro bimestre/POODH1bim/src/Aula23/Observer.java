package Aula23;

public interface Observer {
    public void adicionar(Observador o);

    public void remover(Observador o);

    public void notificar(String cambio);
}
