package com.odontologica.clinica.repository;

import com.odontologica.clinica.entity.PacienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPacienteRepository extends JpaRepository<PacienteEntity, Long> {
}
