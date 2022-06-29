package Aula11;

import java.time.LocalDate;

public class ImpressoraEpson extends Impressora  {

    public ImpressoraEpson(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDisponiveis, double porcentagemTinta) {
        super(modelo, tipoConexao, dataFabricacao, folhasDisponiveis, porcentagemTinta);
    }

    @Override
    public String imprimir() {
        String str = "imprimindo da epson";
        return str;
    }
}
