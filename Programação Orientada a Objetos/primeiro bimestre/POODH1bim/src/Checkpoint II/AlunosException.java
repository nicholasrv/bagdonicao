package Hogwarts;

public class AlunosException extends Exception {

    public AlunosException(){
    }

    public AlunosException(String message){
        super(message);
    }

    @Override
    public String toString(){
        return getMessage();
    }

}
