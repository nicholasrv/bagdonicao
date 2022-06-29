package Aula11;

import java.time.LocalDate;

public abstract class Impressora {
    private String modelo;
    private String tipoConexao;
    private LocalDate dataFabricacao;
    private int folhasDisponiveis;
    private double porcentagemTinta;

    public Impressora(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDisponiveis, double porcentagemTinta) {
        this.modelo = modelo;
        this.tipoConexao = tipoConexao;
        this.dataFabricacao = dataFabricacao;
        this.folhasDisponiveis = folhasDisponiveis;
        this.porcentagemTinta = porcentagemTinta;
    }

    //// Métodos ///

    public boolean temPapel () {
        return this.folhasDisponiveis != 0;
    }

    public boolean precisaTinta() {
        if (this.porcentagemTinta <= 20){
            return true;
        }
        else{
            return false;
        }
    }

    public abstract String imprimir();


    ////Getters and setters///

    public double getPorcentagemTinta() {
        return porcentagemTinta;
    }

    public void setPorcentagemTinta(double porcentagemTinta) {
        this.porcentagemTinta = porcentagemTinta;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getTipoConexao() {
        return tipoConexao;
    }

    public void setTipoConexao(String tipoConexao) {
        this.tipoConexao = tipoConexao;
    }

    public LocalDate getDataFabricacao() {
        return dataFabricacao;
    }

    public void setDataFabricacao(LocalDate dataFabricacao) {
        this.dataFabricacao = dataFabricacao;
    }

    public int getFolhasDisponiveis() {
        return folhasDisponiveis;
    }

    public void setFolhasDisponiveis(int folhasDisponiveis) {
        this.folhasDisponiveis = folhasDisponiveis;
    }


}
