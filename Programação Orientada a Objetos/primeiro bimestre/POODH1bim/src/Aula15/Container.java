package Aula15;

public class Container implements Comparable<Container>{

    private Integer id;
    private String paisOrigem;
    private String descricao;
    private boolean materiaisPerigosos;

    public Container(Integer id, String paisOrigem, String descricao, boolean materiaisPerigosos) {
        this.id = id;
        this.paisOrigem = paisOrigem;
        this.descricao = descricao;
        this.materiaisPerigosos = materiaisPerigosos;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPaisOrigem() {
        return paisOrigem;
    }

    public void setPaisOrigem(String paisOrigem) {
        this.paisOrigem = paisOrigem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public boolean isMateriaisPerigosos() {
        return materiaisPerigosos;
    }

    public void setMateriaisPerigosos(boolean materiaisPerigosos) {
        this.materiaisPerigosos = materiaisPerigosos;
    }

    @Override
    public int compareTo(Container o) {
        int compareid = ((Container)o).getId();

        return this.getId() - compareid;
    }
}
