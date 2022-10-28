package com.odontologica.clinica.service.impl;

import com.odontologica.clinica.entity.ConsultasEntity;
import com.odontologica.clinica.entity.DentistaEntity;
import com.odontologica.clinica.entity.PacienteEntity;
import com.odontologica.clinica.repository.IConsultasRepository;
import com.odontologica.clinica.service.IClinicaService;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class ConsultasServiceImpl implements IClinicaService<ConsultasEntity> {

    private final IConsultasRepository consultasRepository;
    private PacienteEntity pacienteEntity;
    private DentistaEntity dentistaEntity;

    public ConsultasServiceImpl(IConsultasRepository consultasRepository) {
        this.consultasRepository = consultasRepository;
    }

    @Override
    public ConsultasEntity salvar(ConsultasEntity consultasEntity) throws SQLException {
        return null;
    }

    @Override
    public String alterar(ConsultasEntity consultasEntity) throws SQLException {
        return null;
    }

    @Override
    public List<ConsultasEntity> buscarTodos() throws SQLException {
        return null;
    }

    @Override
    public Optional<ConsultasEntity> buscarPorId(Long id) throws SQLException {
        return Optional.empty();
    }

    @Override
    public String excluir(Long id) throws SQLException {
        return null;
    }
}
