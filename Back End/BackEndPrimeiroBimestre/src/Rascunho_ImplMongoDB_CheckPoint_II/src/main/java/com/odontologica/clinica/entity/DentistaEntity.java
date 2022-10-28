package com.odontologica.clinica.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter

@Entity
@Table(name = "Dentista")
public class DentistaEntity {

    @Id
    @SequenceGenerator(name = "dentista_sequence",sequenceName = "dentista_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "sequence_generator")
    private Long id;
    private String nome;
    private String sobrenome;
    private String matricula;

    @ManyToMany(mappedBy = "consultaDentista",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<PacienteEntity> pacientes = new HashSet<PacienteEntity>();


    public DentistaEntity(Long id, String nome, String sobrenome, String matricula) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
    }

    public DentistaEntity(String nome, String sobrenome, String matricula) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
    }

    public DentistaEntity() {
    }
}
