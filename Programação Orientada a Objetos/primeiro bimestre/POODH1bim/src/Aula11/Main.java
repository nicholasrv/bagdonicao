package Aula11;

import java.time.LocalDate;

public class Main{

    public static void main(String[]args){
        ImpressoraEpson epson1 = new ImpressoraEpson("EP987", "USB", LocalDate.of(2019, 4, 25), 10, 30);
        ImpressoraCanon canon1 = new ImpressoraCanon("CA876", "Wi-fi", LocalDate.of(2021, 8, 17), 24, 18);

        System.out.println(epson1.imprimir());

        System.out.println(canon1.imprimir());

        System.out.println(canon1.precisaTinta());

        System.out.println(epson1.precisaTinta());
    }

//EQUIPE 5 -
//Rodrigo Rodrigues
//Marcos Fonseca
//Michel Nunes
//Nicholas Ruas Viegas
//Thalles Denner

}

