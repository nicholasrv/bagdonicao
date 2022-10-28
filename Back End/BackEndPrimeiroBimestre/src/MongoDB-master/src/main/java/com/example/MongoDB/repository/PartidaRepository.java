package com.example.MongoDB.repository;

import com.example.MongoDB.model.EstadoModel;
import com.example.MongoDB.model.PartidaModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartidaRepository extends MongoRepository<PartidaModel,Integer> {

    List<PartidaModel> findAllByEstado (EstadoModel estado);
}
