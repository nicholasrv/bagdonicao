package Aula11.ExercicioEmpresa;

public class Empresa {
    private String nome;
    private String cnpj;

//    private Funcionario = Funcionario;

    public Empresa(String nome, String cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}
