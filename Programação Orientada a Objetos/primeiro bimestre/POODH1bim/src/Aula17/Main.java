package Aula17;

public class Main {

    public static void main(String[] args) {
        //Criamos um objeto do tipo Empresa
        EmpresaTrem empresa = new EmpresaTrem();


        //Criamos as reservas

        Reservas r1 = new Reservas();
        r1.setCodigo("RX3242");
        r1.setQuantidadePassageiros(2);
        r1.setEstacaoOrigem("BUENOS AIRES");
        r1.setEstacaoDestino("MERCEDES");

        Reservas r2 = new Reservas();
        r2.setCodigo("RX3242");
        r2.setQuantidadePassageiros(2);
        r2.setEstacaoOrigem("BUENOS AIRES");
        r2.setEstacaoDestino("BRAGADO");

        //Adicionamos as reservas a empresa
        empresa.adicionarReserva(r1);
        empresa.adicionarReserva(r2);

        //Chamamos os métodos solicitados
        System.out.println("Valor Total: " + empresa.valorTotal());
        System.out.println("Quantidade de vezes que passaram por : BUENOS AIRES: " + empresa.quantasVezesVisitada("BUENOS AIRES"));

    }


}
