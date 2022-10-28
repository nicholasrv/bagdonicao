package com.odontologica.clinica.repository;

import com.odontologica.clinica.entity.ConsultasEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IConsultasRepository extends JpaRepository<ConsultasEntity, Long> {
}
