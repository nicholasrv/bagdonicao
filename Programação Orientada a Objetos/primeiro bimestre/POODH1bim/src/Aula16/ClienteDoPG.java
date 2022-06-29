package Aula16;

public class ClienteDoPG {

    ///attributes

    private String nome;
    private String sobrenome;
    private String rg;
    private double saldoEmConta;
    private double limite;
    private double divida;

    ////constructor

    public ClienteDoPG(String nome, String sobrenome, String rg, double limite) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.limite = limite;
        saldoEmConta=0;
        divida=0;
    }

    //methods

    public void compra (double valorProduto) throws ClientesException {

        if ((saldoEmConta + limite) < valorProduto){
            throw new ClientesException("Saldo insuficiente");
        }
        else {
            saldoEmConta -= valorProduto;
        }
    }


    public void pagarDivida (double valor) throws ClientesException {
        if(divida <= 0){
            throw new ClientesException("Não existem dívidas");
        }

        else {
            saldoEmConta -= valor;
        }

    }

    @Override
    public String toString() {
        return "Cliente" +
                nome + ' ' + sobrenome + ' ' + ", seu saldo é = " + saldoEmConta + "R$";

    }



        ///getters and setters

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public String getSobrenome() {
            return sobrenome;
        }

        public void setSobrenome(String sobrenome) {
            this.sobrenome = sobrenome;
        }

        public String getRg() {
            return rg;
        }

        public void setRg(String rg) {
            this.rg = rg;
        }

        public double getSaldoEmConta() {
            return saldoEmConta;
        }

        public void setSaldoEmConta(double saldoEmConta) {
            this.saldoEmConta = saldoEmConta;
        }

        public double getLimite() {
            return limite;
        }

        public void setLimite(double limite) {
            this.limite = limite;
        }


}
