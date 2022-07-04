package Hogwarts;

import java.util.ArrayList;
import java.util.Collections;

public abstract class Casas {


    private String orientador;
    private int qtdAlunos;
    private int pontuacaoCasa;
    private String especialidade;
    public static ArrayList<Alunos> listaAlunos = new ArrayList<>();

    public Casas(String orientador, int qtdAlunos, int pontuacaoCasa, String especialidade) {
        this.orientador = orientador;
        this.qtdAlunos = qtdAlunos;
        this.pontuacaoCasa = pontuacaoCasa;
        this.especialidade = especialidade;
    }

    public int obterQuantidadeDeAlunos() throws AlunosException  {
        return 0;
    }


    public int somarPontos(){
        int total =0;
        for(Alunos pontuacao : listaAlunos){
            total+= pontuacao.getPontuacao();
        }
        return total;

    }



    public static void addAluno(Alunos aluno) { listaAlunos.add(aluno);}

    public String getOrientador() {
        return orientador;
    }

    public void setOrientador(String orientador) {
        this.orientador = orientador;
    }

    public int getQtdAlunos() {
        return qtdAlunos;
    }

    public void setQtdAlunos(int qtdAlunos) {
        this.qtdAlunos = qtdAlunos;
    }

    public int getPontuacaoCasa() {
        return pontuacaoCasa;
    }

    public void setPontuacaoCasa(int pontuacaoCasa) {
        this.pontuacaoCasa = pontuacaoCasa;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public ArrayList<Alunos> getListaAlunos() {
        return listaAlunos;
    }

    public void setListaAlunos(ArrayList<Alunos> listaAlunos) {
        this.listaAlunos = listaAlunos;
    }


    //    public static void addAluno(Alunos aluno) { listaAlunos.add(aluno);}
//
//    public String getOrientador() {
//        return orientador;
//    }
//
//    public void setOrientador(String orientador) {
//        this.orientador = orientador;
//    }
//
//    public Integer getQtdAlunos() {
//        return qtdAlunos;
//    }
//
//    public void setQtdAlunos(Integer qtdAlunos) {
//        this.qtdAlunos = qtdAlunos;
//    }
//
//    public Integer getPontuacaoCasa() {
//        return pontuacaoCasa;
//    }
//
//    public void setPontuacaoCasa(Integer pontuacaoCasa) {
//        this.pontuacaoCasa = pontuacaoCasa;
//    }
//
//    public String getEspecialidade() {
//        return especialidade;
//    }
//
//    public void setEspecialidade(String especialidade) {
//        this.especialidade = especialidade;
//    }
//
//    public  ArrayList<Alunos> getListaAlunos() {
//        return listaAlunos;
//    }
//
//    public void setListaAlunos(ArrayList<Alunos> listaAlunos) {
//        this.listaAlunos = listaAlunos;
//    }
//



}
