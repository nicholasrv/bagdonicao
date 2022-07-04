package Hogwarts;

import java.util.ArrayList;

public class LufaLufa extends Casas{

    public LufaLufa(String orientador, Integer qtdAlunos, Integer pontuacaoCasa, String especialidade) {
        super(orientador, qtdAlunos, pontuacaoCasa, especialidade);
    }

    @Override
    public int obterQuantidadeDeAlunos() throws AlunosException {
        int quantidadeDeAlunos = 0;

        for (Alunos aluno : listaAlunos) {
            if (aluno.getDisciplinaDestaque() == "herbologia") {
                quantidadeDeAlunos++;}
            else if(aluno.getDisciplinaDestaque() == "") {
                throw new AlunosException("não tem aluno nessa casa");
            } else;
        }System.out.println("Lufa Lufa tem: " + quantidadeDeAlunos + " alunos");
        return quantidadeDeAlunos;
    }






    @Override
    public int somarPontos () {
        int total = 0;
        for (Alunos pontuacao : getListaAlunos()) {
            if (pontuacao.getDisciplinaDestaque() == "herbologia") {
                total += pontuacao.getPontuacao();
            }
        }System.out.println("A pontuação nessa casa é de: "+ total);
        return total;
    }

}
