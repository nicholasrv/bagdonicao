package Hogwarts;

import java.util.ArrayList;
import java.util.Collections;


public class Main{




        public static void main(String[] args) throws AlunosException {


            Escola escola = new Escola("hogwarts", "Inglaterra", "Dmumbledor", 1000);
            Corvinal corvinal = new Corvinal("Fílio Flitwick", 100,1000,"Herbologia", new ArrayList<>());
            Grifinoria grifinoria = new Grifinoria("Minerva McGonagall", 100, 1000, "Quadribol");
            Sonserina sonserina = new Sonserina("Severo Snape", 100, 1000, "Defesa contra a arte das trevas");
            LufaLufa lufalufa = new LufaLufa("Sprout", 100, 1000, "Herbologia");


            Alunos aluno1 = new Alunos("Taynan", "Londres", 200, 1, 7, "poções");
            Alunos aluno2 = new Alunos("Nicholas", "Londres", 200, 2, 7, "quadribol");
            Alunos aluno3 = new Alunos("Ruggiero", "Londres", 200, 3, 7, "defesa contra a arte das trevas");
            Alunos aluno4 = new Alunos("joao", "Paris", 100, 4, 7, "poções");
            Alunos aluno5 = new Alunos("Ravena", "Roma", 50, 5, 7, "herbologia");
            Alunos aluno6 = new Alunos("Lili", "Londres", 250, 6, 7, "defesa contra a arte das trevas");
            Alunos aluno7 = new Alunos("Roger", "Paris", 100, 7, 7, "poções");
            Alunos aluno8 = new Alunos("Pedro", "Londres", 120, 8, 7, "quadribol");
            Alunos aluno9 = new Alunos("Cassia", "Italia", 150, 9, 7, "defesa contra a arte das trevas");
            Alunos aluno10 = new Alunos("Enola", "Barcelona", 100, 10, 7, "poções");
            Alunos aluno11 = new Alunos("Rubio", "Nova Delhi", 220, 11, 7, "quadribol");
            Alunos aluno12 = new Alunos("Ferdinando", "Paris", 0, 12, 7, "defesa contra a arte das trevas");
            Alunos aluno13 = new Alunos("Rouina", "Londres", 100, 13, 7, "herbologia");
            Alunos aluno14 = new Alunos("Lucio", "Londres", 240, 14, 7, "quadribol");
            Alunos aluno15 = new Alunos("Cadence", "Londres", 120, 15, 7, "defesa contra a arte das trevas");
            Alunos aluno16 = new Alunos("Lucas", "Londres", 80, 16, 7, "quadribol");
            Alunos aluno17 = new Alunos("Diana", "Londres", 50, 17, 7, "defesa contra a arte das trevas");
            Alunos aluno18 = new Alunos("Robson", "Londres", 100, 18, 7, "herbologia");
            Alunos aluno19 = new Alunos("Giulia", "Londres", 100, 19, 7, "quadribol");
            Alunos aluno20 = new Alunos("Roberto", "Londres", 230, 20, 7, "defesa contra a arte das trevas");
            Alunos aluno21 = new Alunos("Carla", "Londres", 200, 21, 7, "poções");

            Casas.addAluno(aluno1);
            Casas.addAluno(aluno2);
            Casas.addAluno(aluno3);
            Casas.addAluno(aluno4);
            Casas.addAluno(aluno5);
            Casas.addAluno(aluno6);
            Casas.addAluno(aluno7);
            Casas.addAluno(aluno8);
            Casas.addAluno(aluno9);
            Casas.addAluno(aluno10);
            Casas.addAluno(aluno11);
            Casas.addAluno(aluno12);
            Casas.addAluno(aluno13);
            Casas.addAluno(aluno14);
            Casas.addAluno(aluno15);
            Casas.addAluno(aluno16);
            Casas.addAluno(aluno17);
            Casas.addAluno(aluno18);
            Casas.addAluno(aluno19);
            Casas.addAluno(aluno20);
            Casas.addAluno(aluno21);



            corvinal.obterQuantidadeDeAlunos();
            corvinal.somarPontos();

            grifinoria.obterQuantidadeDeAlunos();
            grifinoria.somarPontos();

            sonserina.obterQuantidadeDeAlunos();
            sonserina.somarPontos();

            lufalufa.obterQuantidadeDeAlunos();
            lufalufa.somarPontos();

            aluno1.matricularAluno();

        }



    }



