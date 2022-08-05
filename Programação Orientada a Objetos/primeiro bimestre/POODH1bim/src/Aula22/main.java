package Aula22;

public class main {
    public static void main(String[] args) {

        Arquivo pasta= new Pasta("documentos");
        Arquivo video= new ArquivoVideo("video.mp4");
        Arquivo texto= new ArquivoTexto("Lista.text");

        ((Pasta)pasta).addArquivo(video);
        ((Pasta)pasta).addArquivo(texto);

        video.mostrar();
        texto.mostrar();

    }
}
