package Aula16.MaterialDiana.ExcecoesPersonalizadas;

public class Data {

    //Criamos uma excessão personaloizada para especificar os problemas que
    // ocorrem, para isso usa-se herança.
    //Por exemplo Temos uma Data e queremos especificar o tipo de erro. Sendo:
    //  -O dia pode estar fora do intervalo (consideraremos dias de 1 a 31
    //  par fins práticos)  - O mês estar fora do intervalor

    private int dia;
    private int mes;
    private int ano;

    public Data(int dia, int mes, int ano) throws DataException {
        if(dia < 1 || dia > 31){
            throw new DataException("Erro no dia");
        }
        this.dia = dia;
        if(mes < 1 || dia > 12){
            throw new DataException("Erro no mes");
        }
        this.mes = mes;
        this.ano = ano;
    }


}
