package Aula11.ExercicioEmpresa;

public class Gerente extends Funcionario{

    private Double adicionalGerente;

    public Gerente(String nome, String sobrenome, String cpf, String email, Double adicionalGerente) {
        super(nome, sobrenome, cpf, email, adicionalGerente);
        this.adicionalGerente = adicionalGerente;
    }

    // sobrescrita

    @Override
    public Double pagamento() {
        return getSalario()+ adicionalGerente;
    }

    // sobrecarga

    public String definirAreaGerente(){
        String geral = "geral";
        return geral;
    }


    public String definirAreaGerente(String areaAtuacao){
        return areaAtuacao;
    }
}


