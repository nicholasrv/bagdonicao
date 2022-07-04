package Hogwarts;

import java.util.ArrayList;

public class Corvinal extends Casas {

    public Corvinal(String orientador, int qtdAlunos, int pontuacaoCasa, String especialidade, ArrayList<Alunos> listaAlunos) {
        super(orientador, qtdAlunos, pontuacaoCasa, especialidade);
    }

    @Override
    public int obterQuantidadeDeAlunos() throws AlunosException {
        int quantidadeDeAlunos = 0;

            for (Alunos aluno : listaAlunos) {
                if (aluno.getDisciplinaDestaque() == "poções") {
                    quantidadeDeAlunos++;}
                    else if(aluno.getDisciplinaDestaque() == "") {
                        throw new AlunosException("não tem aluno nessa casa");
                    } else;
                }System.out.println("Corvinal tem: " + quantidadeDeAlunos + " alunos");
        return quantidadeDeAlunos;
    }


    @Override
    public int somarPontos () {
        int total = 0;
        for (Alunos pontuacao : getListaAlunos()) {
            if (pontuacao.getDisciplinaDestaque() == "poções") {
                total += pontuacao.getPontuacao();
            }
        }System.out.println("A pontuação nessa casa é de: "+ total);
        return total;
    }

}
