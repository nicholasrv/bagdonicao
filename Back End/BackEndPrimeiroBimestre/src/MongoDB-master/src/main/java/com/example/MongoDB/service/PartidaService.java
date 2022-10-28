package com.example.MongoDB.service;

import com.example.MongoDB.model.EstadoModel;
import com.example.MongoDB.model.PartidaModel;
import com.example.MongoDB.repository.PartidaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartidaService {

    private PartidaRepository partidaRepository;

    public PartidaService(PartidaRepository partidaRepository){
        this.partidaRepository = partidaRepository;
    }

    public PartidaModel adicionar(PartidaModel partida){
        return partidaRepository.save(partida);
    }

    public List<PartidaModel> listar(){
        return partidaRepository.findAll();
    }

    public List<PartidaModel> partidaAoVivo(){
        return partidaRepository.findAllByEstado(EstadoModel.AO_VIVO);
    }
}
