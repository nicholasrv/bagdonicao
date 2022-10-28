package com.example.MongoDB.repository;

import com.example.MongoDB.model.TorneioModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TorneioRepository extends MongoRepository<TorneioModel,Integer> {

}
