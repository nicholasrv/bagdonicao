package com.dh.exercicio_professor.service.impl;

import com.dh.exercicio_professor.model.Trainer;
import com.dh.exercicio_professor.service.TrainerService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TrainerServiceImpl implements TrainerService {
    @Override
    public List<Trainer> listTrainer(){
        return Arrays.asList(new Trainer("Marcos"), new Trainer("Ana"));
    }
}
