package Aula12;

/*
* Crie uma classe de Teste com o método main. Nesta classe, crie um
assistente administrativo e um técnico e mostre os dados de cada um
dos funcionários
* */

public class Teste {

    public static void main(String[] args) {
        Administrativo tecAdm = new Administrativo("Maria", 1000D, "noturno");
        tecAdm.exibeDados();

        Tecnico assTec = new Tecnico("Joao", 1500D, 200D);
        assTec.exibeDados();

        Assistente assist = new Assistente("Pedro", 1200D, 171);
        assist.exibeDados();
    }
}
