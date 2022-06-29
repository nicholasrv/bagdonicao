package Aula11;

import java.time.LocalDate;

public class ImpressoraCanon extends Impressora  {

    public ImpressoraCanon(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDisponiveis, double porcentagemTinta) {
        super(modelo, tipoConexao, dataFabricacao, folhasDisponiveis, porcentagemTinta);
    }

    @Override
    public String imprimir() {
        String str = "imprimindo da canon";
        return str;
}

    @Override
    public boolean precisaTinta() {
        if (this.getPorcentagemTinta() <= 10){
            return true;
        }
        else{
            return false;
        }
    }
}
