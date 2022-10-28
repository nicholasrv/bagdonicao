package com.odontologica.clinica.service.impl;

import com.odontologica.clinica.repository.IDentistaRepository;
import com.odontologica.clinica.entity.DentistaEntity;
import com.odontologica.clinica.service.IClinicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class DentistaServiceImpl implements IClinicaService<DentistaEntity> {

    private final IDentistaRepository dentistaRepository;

    public DentistaServiceImpl(IDentistaRepository dentistaRepository) {
        this.dentistaRepository = dentistaRepository;
    }

    @Override
    public DentistaEntity salvar(DentistaEntity dentistaEntity) throws SQLException {
        if(dentistaEntity != null) {
            return dentistaRepository.save(dentistaEntity);
        }
        return new DentistaEntity();
    }

    @Override
    public String alterar(DentistaEntity dentistaEntity) throws SQLException {
        if(dentistaEntity != null && dentistaRepository.findById(dentistaEntity.getId()).isPresent()){
            dentistaRepository.saveAndFlush(dentistaEntity);
            return "Dentista alterado com sucesso!";
        }
        return "Não foi possível alterar os dados";
    }

    @Override
    public List<DentistaEntity> buscarTodos() throws SQLException{
        return dentistaRepository.findAll();
    }

    @Override
    public Optional<DentistaEntity> buscarPorId(Long id) throws SQLException {
        return dentistaRepository.findById(id);
    }

    @Override
    public String excluir(Long id) throws SQLException {
        if(dentistaRepository.findById(id).isPresent()){
            dentistaRepository.deleteById(id);
            return "Dentista deletado com sucesso!";
        }
        return "Dentista não encontrado!";
    }
}
