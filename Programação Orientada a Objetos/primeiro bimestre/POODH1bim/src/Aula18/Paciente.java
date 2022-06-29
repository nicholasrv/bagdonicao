package Aula18;

import java.util.Date;

public class Paciente {
    String nome;
    String sobrenome;
    String historiaClinica;
    Date dataInternacao;
    Date dataAlta;

    public Paciente(String nome, String sobrenome, Date dataInternacao) throws PacienteException {
        Date hoje = new Date();
        this.nome = nome;
        this.sobrenome = sobrenome;
        dataAlta = null;
        if (dataInternacao.before(hoje)) {
            throw new PacienteException("Data da internação precisa ser o dia de hoje ou uma data após");
        } else {
            this.dataInternacao = dataInternacao;
        }
    }

    public Date getDataInternacao() {
        return dataInternacao;
    }

    public Date getDataAlta() {
        return dataAlta;
    }

    public void darAlta(Date dataAlta) throws PacienteException {
        if (dataAlta.after(dataInternacao)) {
            System.out.println("Ok");
        } else {
            throw new PacienteException("Data da alta precisa ser o dia de hoje ou uma data apos");
        }
    }
}



    