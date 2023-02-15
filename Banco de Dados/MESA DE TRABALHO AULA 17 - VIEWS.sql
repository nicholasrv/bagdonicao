###################### 
# Glauber S.Silva, Geyson Kaio, Jonathas Magalhães, Matheus Galvão, Nicholas Ruas Viegas
######################


CREATE VIEW dados_do_cliente AS
	SELECT clientes.ClienteID, clientes.Contato, clientes.Fax, clientes.Telefone
    FROM clientes;

SELECT * FROM dados_do_cliente;

SELECT clientes.Telefone
FROM clientes
		where Fax is NULL;
        
        
SELECT clientes.Telefone, clientes.Fax
from clientes
		where Fax = "";
        

SELECT * FROM dados_do_cliente
	where Fax = "";
    
CREATE VIEW dados_do_fornecedor AS
	SELECT provedores.ProvedorID, provedores.contato, provedores.Empresa, provedores.Cidade, provedores.CodigoPostal, provedores.Pais
    FROM provedores;
    
SELECT * FROM dados_do_fornecedor;

SELECT *
FROM provedores
		where pais = "Brazil";
        
SELECT * FROM dados_do_fornecedor
	where Pais = "Brazil";
    
#########################
# PARTE 2
#########################

    
    
	
	


    