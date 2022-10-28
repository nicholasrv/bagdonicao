package com.odontologica.clinica.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Consultas")
@AllArgsConstructor
@NoArgsConstructor

public class ConsultasEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private Date dataConsulta;
    private LocalDateTime horaConsulta;

    public ConsultasEntity(Date dataConsulta, LocalDateTime horaConsulta) {
        this.dataConsulta = dataConsulta;
        this.horaConsulta = horaConsulta;
    }

    //    private List<ConsultasEntity> consultasEntityList;

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_dentista")
//    private DentistaEntity dentistaEntity;
//
//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_paciente")
//    private PacienteEntity pacienteEntity;

    public Long getId() {
        return id;
    }
}
