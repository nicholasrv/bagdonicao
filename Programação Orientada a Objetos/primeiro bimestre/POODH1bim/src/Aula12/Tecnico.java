package Aula12;

public class Tecnico extends Funcionario {
    private Double bonusSalarial;

    public Tecnico(String nome, Double salario, Double bonusSalarial) {
        super(nome, salario);
        this.bonusSalarial = bonusSalarial;
    }

    @Override
    public Double ganhoAnual() {
        return (getSalario() + bonusSalarial)  * 12;
    }
}
