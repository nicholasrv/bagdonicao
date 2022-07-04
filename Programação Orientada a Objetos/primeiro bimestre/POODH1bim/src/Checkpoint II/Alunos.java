package Hogwarts;


import java.util.Scanner;

public class Alunos {

    private String nome;
    private String cidadeEndereco;
    private int pontuacao;
    private int anoLetivo;
    private int matricula;
    private String disciplinaDestaque;


    public Alunos(String nome, String cidadeEndereco, int pontuacao, int matricula, int anoLetivo, String disciplinaDestaque) {
        this.nome = nome;
        this.cidadeEndereco = cidadeEndereco;
        this.pontuacao = pontuacao;
        this.anoLetivo = anoLetivo;
        this.matricula = matricula;
        this.disciplinaDestaque = disciplinaDestaque;

    }


//    Getters and Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCidadeEndereco() {
        return cidadeEndereco;
    }

    public void setCidadeEndereco(String cidadeEndereco) {
        this.cidadeEndereco = cidadeEndereco;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(int pontuacao) {
        this.pontuacao = pontuacao;
    }

    public int getAnoLetivo() {
        return anoLetivo;
    }

    public void setAnoLetivo(int anoLetivo) {
        this.anoLetivo = anoLetivo;
    }

    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public String getDisciplinaDestaque() {
        return disciplinaDestaque;
    }

    public void setDisciplinaDestaque(String disciplinaDestaque) {
        this.disciplinaDestaque = disciplinaDestaque;
    }


//    public static void main(String[] args) {
//
//    }

    public void matricularAluno() {

        Scanner sc = new Scanner(System.in);
        System.out.println("Por favor, digite o nome completo do aluno: ");
        nome = sc.next();
        System.out.println("Por favor, digite a cidade do aluno: ");
        cidadeEndereco = sc.next();
        System.out.println("Por favor, digite a matricula do aluno: ");
        matricula = sc.nextInt();
        System.out.println("Por favor, digite o ano letivo do aluno: ");
        anoLetivo = sc.nextInt();
        System.out.println("Por favor, digite a disciplina destaque do aluno: ");
        disciplinaDestaque = sc.next();


        System.out.println("Parabéns, o aluno foi matriculado com sucesso!");

    }


}
