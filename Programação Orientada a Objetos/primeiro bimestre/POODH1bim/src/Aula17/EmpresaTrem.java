package Aula17;

import java.util.ArrayList;

public class EmpresaTrem {

    ArrayList<Reservas> reservasViagem;

    public EmpresaTrem(){
        reservasViagem = new ArrayList<>();
    }

    //metodo para poder adicionar reservas a  coleção reservas.
    public void adicionarReserva(Reservas reservas){
        reservasViagem.add(reservas);
    }

    public double valorTotal(){
        double total = 0;
        for(Reservas reserva : reservasViagem){
            total += reserva.getPreco();
        }
        return total;
    }

    public int quantasVezesVisitada(String estacao){
        int quant = 0;
        for(Reservas reserva: reservasViagem) {
            if(reserva.getEstacaoDestino() == estacao ||
                    reserva.getEstacaoOrigem() == estacao){
                quant++;
            }
        }
        return quant;
    }
}
