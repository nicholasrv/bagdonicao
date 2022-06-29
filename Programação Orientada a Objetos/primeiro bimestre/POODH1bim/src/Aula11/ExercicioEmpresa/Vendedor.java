package Aula11.ExercicioEmpresa;

public class Vendedor extends Funcionario{

    private Double comissao;

    public Vendedor(String nome, String sobrenome, String cpf, String email, Double salario, Double comissao) {
        super(nome, sobrenome, cpf, email, salario);
        this.comissao = 600.00;
    }

    @Override
    public Double pagamento() {
        return getSalario() + comissao;
    }

}
