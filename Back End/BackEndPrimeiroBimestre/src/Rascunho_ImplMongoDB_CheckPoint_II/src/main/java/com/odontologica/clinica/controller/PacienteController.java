package com.odontologica.clinica.controller;

import com.odontologica.clinica.entity.PacienteEntity;
import com.odontologica.clinica.service.impl.PacienteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
public class PacienteController {

    private PacienteServiceImpl pacienteService;

    public PacienteController(PacienteServiceImpl pacienteService) {
        this.pacienteService = pacienteService;
    }

    @PostMapping("/paciente/salvar")
    public PacienteEntity salvaPaciente(@RequestBody PacienteEntity pacienteEntity) throws SQLException {
        return pacienteService.salvar(pacienteEntity);
    }

    @PutMapping("/paciente/alterar")
    public String alterarPaciente(@RequestBody PacienteEntity pacienteEntity) throws SQLException {
        return pacienteService.alterar(pacienteEntity);
    }

    @RequestMapping(value = "/pacientes", method = RequestMethod.GET, produces = "application/json")
    public List<PacienteEntity> buscarTodos() throws SQLException {
        return pacienteService.buscarTodos();
    }

    @GetMapping("/paciente/{id}")
    public Optional<PacienteEntity> buscarPorId(@PathVariable Long id) throws SQLException {
        return pacienteService.buscarPorId(id);
    }

    @DeleteMapping("/paciente/delete/{id}")
    public String excluir(@PathVariable Long id) throws SQLException {
        return pacienteService.excluir(id);
    }
}
