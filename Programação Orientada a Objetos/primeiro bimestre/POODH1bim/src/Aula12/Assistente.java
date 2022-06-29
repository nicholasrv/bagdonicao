package Aula12;

public class Assistente extends Funcionario {
    private int matricula;

    public Assistente(String nome, Double salario, int matricula) {
        super(nome, salario);
        this.matricula = matricula;
    }

    @Override
    public void exibeDados() {
        System.out.println("Nome: " + getNome() + " | Salario: " + getSalario() + " | Ganho Anual: " + ganhoAnual() + " | Mat. Assistente: " + matricula);
    }

}
