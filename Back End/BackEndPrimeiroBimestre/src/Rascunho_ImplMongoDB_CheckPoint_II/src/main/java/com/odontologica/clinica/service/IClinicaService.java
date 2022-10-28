package com.odontologica.clinica.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface IClinicaService<T> {

    public T salvar(T t) throws SQLException;

    public String alterar(T t) throws SQLException;

    public List<T> buscarTodos() throws SQLException;

    public Optional<T> buscarPorId(Long id) throws SQLException;

    public String excluir(Long id) throws SQLException;
}
