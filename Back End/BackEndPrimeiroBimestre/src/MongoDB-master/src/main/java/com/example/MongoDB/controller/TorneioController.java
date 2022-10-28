package com.example.MongoDB.controller;


import com.example.MongoDB.model.TorneioModel;
import com.example.MongoDB.service.TorneioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/torneios")
public class TorneioController {

    private TorneioService torneioService;

    public TorneioController(TorneioService torneioService){
        this.torneioService = torneioService;
    }

    @PostMapping
    public TorneioModel adicionarTorneio(@RequestBody TorneioModel torneio){
       return torneioService.guardarTorneio(torneio);
    }

    @GetMapping
    public List<TorneioModel> listarTorneios(){
        return torneioService.listarTorneios();
    }
}
