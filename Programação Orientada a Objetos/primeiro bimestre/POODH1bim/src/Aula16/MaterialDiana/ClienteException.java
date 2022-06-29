package Aula16.MaterialDiana;

public class ClienteException extends Exception{
    public ClienteException(){ }

    // por padrão se cria um construtor vazio para garantir que todas as exceções serão capturadas

    public ClienteException(String mensagem){
        super(mensagem);
    }

    @Override
    public String toString() {
        return getMessage();
    }
}
