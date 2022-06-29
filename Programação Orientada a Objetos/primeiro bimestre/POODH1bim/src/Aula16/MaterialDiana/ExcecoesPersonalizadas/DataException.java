package Aula16.MaterialDiana.ExcecoesPersonalizadas;

public class DataException extends  Exception{

    // por padrão se cria um construtor vazio para garantir que todas as exceções
    // serão capturadas
    public DataException() { }

    //construtor com parametro de mensagem
    public DataException(String message) {
        super(message);
    }

    //sobrescrever o toString pra retornar o que a gente quiser
    @Override
    public String toString() {
        return "A exceção ocorreu em " + this.getClass().getName() + ". Mensagem: " + this.getMessage();
    }
}
