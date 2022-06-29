//package Aula5;
//
//public class BancoDigital {
//    private int numeroCliente;
//    private String nome;
//    private Double divida;
//
//
//
//    /*Botão direito dentro da classe - generate - contructor / getters ans setters */
//
//    public BancoDigital(int numeroCliente, String nome) {
//        this.numeroCliente = numeroCliente;
//        this.nome = nome;
//        this.divida = 0D;
//    }
//
//    public void aumentarDivida(Double valor){
//        //calcula o valor da divida + aumento da divida
//        this.divida += valor;
//        System.out.println("O saldo devedor do cliente(a) " + this.nome + " é de RS " + this.divida);
//    }
//
//    public void pagarDivida(Double valor){
//        //calcula quanto pagou e sobraria da divida
//        if(this.divida == 0){
//            System.out.println("Não há divida à pagar!");
//        }else {
//            this.divida -= valor;
//            System.out.println("A dívida do cliente(a) " + this.nome + " após pagamento está no valor de R$" + this.divida);
//        }
//    }
//
//    public int getNumeroCliente() {
//        return numeroCliente;
//    }
//
//    public void setNumeroCliente(int numeroCliente) {
//        this.numeroCliente = numeroCliente;
//    }
//
//    public String getNome() {
//        return nome;
//    }
//
//    public void setNome(String nome) {
//        this.nome = nome;
//    }
//
//    public Double getDivida() {
//        return divida;
//    }
//
//}
