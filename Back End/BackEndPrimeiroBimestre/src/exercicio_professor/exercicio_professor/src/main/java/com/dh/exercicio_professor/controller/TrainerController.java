package com.dh.exercicio_professor.controller;

import com.dh.exercicio_professor.model.Trainer;
import com.dh.exercicio_professor.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/trainer")
public class TrainerController {

    private final TrainerService trainerService;

    @Autowired
    public TrainerController(TrainerService trainerService){
        this.trainerService = trainerService;
    }

    @GetMapping
    public List<Trainer> getTrainer(){
        return trainerService.listTrainer();
    }
}
