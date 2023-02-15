SELECT nome, cidade FROM clientes WHERE cidade = 'São Paulo' ORDER BY nome;

SELECT COUNT(*) as qt, b.nome 
	FROM cancoes			a
	INNER JOIN generos		b
    ON a.id_genero = b.id
    GROUP BY b.id
    HAVING qt=81;


SELECT * FROM empregados WHERE data_nascimento = '1984-09-12';

SELECT * FROM clientes;

show tables