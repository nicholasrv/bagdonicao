package Aula16;

public class ClientesException extends Exception {

    public ClientesException(){
    }


    /// Qualquer classe de exceção customizada que eu criar obrigatoriamente herdará de Exception.

    ///

    public ClientesException (String mensagem){
        super (mensagem);
    }


    @Override
    public String toString() {
        return getMessage();
    }

}
