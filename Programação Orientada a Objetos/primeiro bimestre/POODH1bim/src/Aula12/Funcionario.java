package Aula12;

public abstract class Funcionario {
    private String nome;
    private Double salario;

    public Funcionario(String nome, Double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public void addAumento(Double valor) {
        this.salario += valor;
    }

    public Double ganhoAnual() {
        return this.salario * 12;
    }

    public void exibeDados() {
        System.out.println("Nome: " + this.nome + " | Salario: " + this.salario + " | Ganho Anual: " + ganhoAnual());
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }
}