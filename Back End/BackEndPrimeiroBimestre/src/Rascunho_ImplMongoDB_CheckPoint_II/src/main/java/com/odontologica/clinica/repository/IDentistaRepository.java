package com.odontologica.clinica.repository;

import com.odontologica.clinica.entity.DentistaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDentistaRepository extends JpaRepository<DentistaEntity, Long>{

}
