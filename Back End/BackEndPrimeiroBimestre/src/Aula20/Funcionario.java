package Aula20;

import java.io.Serializable;

public class Funcionario implements Serializable {

    private String nome;
    private String sobrenome;
    private String documento;
    private double salario;

    public Funcionario(String nome, String sobrenome, String documento, double salario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.documento = documento;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", documento='" + documento + '\'' +
                ", salario=" + salario +
                '}';
    }
}
