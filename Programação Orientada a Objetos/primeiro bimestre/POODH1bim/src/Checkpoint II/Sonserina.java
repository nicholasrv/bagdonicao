package Hogwarts;

import java.util.ArrayList;

public class Sonserina extends Casas{

    public Sonserina(String orientador, Integer qtdAlunos, Integer pontuacaoCasa, String especialidade) {
        super(orientador, qtdAlunos, pontuacaoCasa, especialidade);
    }

    @Override
    public int obterQuantidadeDeAlunos() throws AlunosException {
        int quantidadeDeAlunos = 0;

        for (Alunos aluno : listaAlunos) {
            if (aluno.getDisciplinaDestaque() == "defesa contra a arte das trevas") {
                quantidadeDeAlunos++;}
            else if(aluno.getDisciplinaDestaque() == "") {
                throw new AlunosException("não tem aluno nessa casa");
            } else;
        }System.out.println("Sonserina tem: " + quantidadeDeAlunos + " alunos");
        return quantidadeDeAlunos;
    }





    @Override
    public int somarPontos () {
        int total = 0;
        for (Alunos pontuacao : getListaAlunos()) {
            if (pontuacao.getDisciplinaDestaque() == "defesa contra a arte das trevas") {
                total += pontuacao.getPontuacao();
            }
        }System.out.println("A pontuação nessa casa é de: "+ total);
        return total;
    }

}





