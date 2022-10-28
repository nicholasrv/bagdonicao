package com.dh.ecommercenicholas.service;

import com.dh.ecommercenicholas.dao.IDao;
import com.dh.ecommercenicholas.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService{
    @Autowired
    IDao<Produto> ProdutoDAOH2;

    public Produto salvar(Produto produto) throws SQLException{
        return ProdutoDAOH2.salvar(produto);
    }

    public List<Produto> buscarTodos() throws SQLException{
        return ProdutoDAOH2.buscarTodos();
    }

    public void alterar(Produto produto) throws SQLException{
        ProdutoDAOH2.alterar(produto);
    }

    public void excluir(int id) throws SQLException{
        ProdutoDAOH2.excluir(id);
    }

    public Optional<Produto> buscarPorId(int id) throws SQLException{
        return ProdutoDAOH2.buscarPorId((id));
    }

}
