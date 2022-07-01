package Aula20;

public class Tamagochi {

    //cria um atributo do tipo da interface
    private Estado estado;

    public Tamagochi() {
        this.setEstado(new ComFome(this));
    }

    public void comer() {
        getEstado().comer();
    }

    public void beber() {
        getEstado().beber();
    }

    public void fazerCarrinho() {
        getEstado().fazerCarinho();
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

}

