#Antonio Henrique Vanucci, Bruno Neves, Glauber S. Silva, Nicholas Ruas Viegas, Pedro Oliveira, Wellington Siqueira

SELECT artistas.nome, albuns.titulo FROM artistas
	INNER JOIN albuns ON albuns.id_artista = artistas.id 
    order by artistas.id;
    
SELECT clientes.nome, faturas.id FROM clientes
	INNER JOIN faturas ON faturas.id_cliente = clientes.id
    WHERE valor_total > 5
    ORDER BY valor_total DESC;
    
    SELECT cancoes.nome, tipos_de_arquivo.nome FROM cancoes
	INNER JOIN tipos_de_arquivo ON cancoes.id_tipo_de_arquivo = tipos_de_arquivo.id
    ORDER BY cancoes.id
    