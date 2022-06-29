package Aula12;

import java.util.Objects;

public class Administrativo extends Funcionario{
    private String turno;
    private Double adicionalNoturno;

    public Administrativo(String nome, Double salario, String turno) {
        super(nome, salario);
        this.turno = turno;
    }

    @Override
    public Double ganhoAnual() {
        return (getSalario() + (Objects.equals(turno, "noite") ? adicionalNoturno : 0)) * 12;
    }

    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }

    public Double getAdicionalNoturno() {
        return adicionalNoturno;
    }

    public void setAdicionalNoturno(Double adicionalNoturno) {
        this.adicionalNoturno = adicionalNoturno;
    }
}
