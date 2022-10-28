package com.example.ORM1.service;

import com.example.ORM1.entity.EstudanteEntity;

import java.util.List;
import java.util.Optional;

public interface IEstudanteService <T>{

    public List<T> findAllEstudantes();
    public Optional<T> findEstudantesById(Long id);

    public T addEstudante(T t);
    public String deleteEstudante(Long id);
    public String updateEstudante(T t);
}
