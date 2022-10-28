package com.odontologica.clinica.controller;

import com.odontologica.clinica.entity.DentistaEntity;
import com.odontologica.clinica.service.impl.DentistaServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
public class DentistaController {
    private DentistaServiceImpl dentistaService;

    public DentistaController(DentistaServiceImpl dentistaService) {
        this.dentistaService = dentistaService;
    }

    @PostMapping("/dentista/salvar")
    public DentistaEntity salvarDentista(@RequestBody DentistaEntity dentistaEntity) throws SQLException {
        return dentistaService.salvar(dentistaEntity);
    }

    @PutMapping("/dentista/alterar")
    public String alterarDentista(@RequestBody DentistaEntity dentistaEntity) throws SQLException {
        return dentistaService.alterar(dentistaEntity);
    }

    @RequestMapping(value = "/dentistas", method = RequestMethod.GET, produces = "application/json")
    public List<DentistaEntity> buscarTodos() throws SQLException {
        return dentistaService.buscarTodos();
    }

    @GetMapping("/dentista/{id}")
    public Optional<DentistaEntity> buscarPorId(@PathVariable Long id) throws SQLException {
        return dentistaService.buscarPorId(id);
    }

    @DeleteMapping("/dentista/delete/{id}")
    public String excluirDentista(@PathVariable Long id) throws SQLException {
        return dentistaService.excluir(id);
    }

}