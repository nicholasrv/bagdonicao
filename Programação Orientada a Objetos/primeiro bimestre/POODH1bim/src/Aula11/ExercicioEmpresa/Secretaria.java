package Aula11.ExercicioEmpresa;

public class Secretaria extends Funcionario{

    public Secretaria(String nome, String sobrenome, String cpf, String email, Double salario) {
        super(nome, sobrenome, cpf, email, salario);
    }
    @Override
    public Double pagamento() {
        return getSalario()+300.00;
    }
}
