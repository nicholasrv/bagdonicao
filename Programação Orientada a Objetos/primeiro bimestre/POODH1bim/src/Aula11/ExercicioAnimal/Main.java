package Aula11.ExercicioAnimal;

public class Main {
    public static void main(String[] args) {
        Cavalo alazao = new Cavalo("barba azul", 12);
        Cachorro catatau = new Cachorro("catatau", 3);
        Preguica lazyBoy = new Preguica ("lazy boy", 5);

        System.out.println(catatau.correr());
        System.out.println(catatau.emitirSom());

        System.out.println(alazao.correr());
        System.out.println(alazao.emitirSom());

        System.out.println(lazyBoy.emitirSom());
        System.out.println(lazyBoy.subirEmArvores());

    }

    //EQUIPE 5 -
//Rodrigo Rodrigues
//Marcos Fonseca
//Michel Nunes
//Nicholas Ruas Viegas
//Thalles Denner

}
