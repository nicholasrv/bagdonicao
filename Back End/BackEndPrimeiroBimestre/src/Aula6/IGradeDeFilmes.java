package Aula6;

import Aula6.FilmeNaoHabilitadoException;

public interface IGradeDeFilmes {

    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException;
}
