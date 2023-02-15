CREATE DATABASE consultoriomedico;

USE consultoriomedico;

###############
#QUERIES
###############

CREATE TABLE pacientes (
	paciente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    registro_sus INT (30) NOT NULL,
    nome_paciente VARCHAR (30),
    sobrenome_paciente VARCHAR (50),
    idade_paciente INT NOT NULL,
    endereço_paciente VARCHAR (50),
    telefone_paciente VARCHAR (25),
    rg_paciente VARCHAR (25),
    cpf_paciente VARCHAR (25)
);

CREATE TABLE especialidades (
	especialidade_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    especialidade_nome VARCHAR (50) NOT NULL
);

CREATE TABLE medicos (
	medico_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_medico VARCHAR (30),
    sobrenome_medico VARCHAR (50),
    crm_medico VARCHAR (20),
    idade_medico INT NOT NULL,
    telefone_medico VARCHAR (25),
    especialidade_medico INT (30),
		CONSTRAINT FK_especialidade_medico
		FOREIGN KEY (especialidade_medico)
		REFERENCES especialidades (especialidade_id)
);

CREATE TABLE consulta (
	consulta_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_consulta DATE NOT NULL,
    hora_consulta TIME NOT NULL,
    paciente_consulta INT (30),
		CONSTRAINT FK_paciente_consulta
		FOREIGN KEY (paciente_consulta)
		REFERENCES pacientes (paciente_id),
    medico_consulta INT (30),
		CONSTRAINT FK_medico_consulta
		FOREIGN KEY (medico_consulta)
		REFERENCES medicos (medico_id)
    );

###########
#CRUDs
###########

INSERT INTO medicos (nome_medico, sobrenome_medico, crm_medico, idade_medico, telefone_medico)
	VALUES 	('Alexandre', 'Martins', '50-86197-6', '47', '(13)99365-8274'),
			('Matheus', 'Pires', '47-69123-2', '34', '(11)99314-6457'),
            ('Mariana', 'Salles', '36-45213-7', '41', '(11)99783-4612'),
            ('Isabella', 'Martins', '75-28319-3', '29', '(11)4516-7851');
            
INSERT INTO pacientes (registro_sus, nome_paciente, sobrenome_paciente, idade_paciente, endereço_paciente, telefone_paciente, rg_paciente, cpf_paciente)
	VALUES 	('111111111', 'Roberto', 'Marinho Alves Siqueira', '56', 'Rua das Laranjeiras, 41, apto 93', '(13)4487-9158', '33.491.648-24', '456.873.144-32'),
			('222222222', 'Camila', 'Chaves da Silva', '37', 'Alameda Siqueira Campos, 97, apto 72', '(17)98642-8732', '14.982.314-75', '576.421.266-95'),
            ('333333333', 'Priscila', 'Fernandes Guedes', '61', 'Rua Campos Melo, 33, apto 45', '(16)2216-6451', '31.569.512-78', '658.372.459-36'),
            ('444444444', 'Fernando', 'Guilhermino dos Santos', '56', 'Alameda Santos, 209', '(11)98234-9678', '34.614.743-25', '495.230.198-21');
            
INSERT INTO especialidades (especialidade_nome)
	VALUES 	('Cardiologista'),
			('Gastroenterologista'),
            ('Urologista'),
            ('Ortopedista'),
			('Otorrinolaringologista'),
            ('Oftalmologista'),
            ('Neurologista');
            
INSERT INTO consulta (data_consulta, hora_consulta, paciente_consulta, medico_consulta)
	VALUES 	('2021-09-20', '13:00:00', 1, 2),
			('2021-09-20', '12:30:00', 2, 3),
            ('2021-09-20', '14:30:00', 3, 4),
            ('2021-09-20', '15:15:00', 4, 1);
            
SELECT * FROM consulta;
            
UPDATE pacientes 
SET nome_paciente = 'Gustavo', sobrenome_paciente = 'Borges', idade_paciente = '32' 
WHERE paciente_id = 3;

DELETE FROM especialidades WHERE especialidade_id = 5;

SELECT registro_sus, nome_paciente, sobrenome_paciente, idade_paciente, endereço_paciente, telefone_paciente, rg_paciente, cpf_paciente
FROM pacientes;

############################################
# O projeto em questão se trata de um pequeno modelo de banco de dados para um consultório médico, com o intuito de facilitar os registros de cada paciente, medico e consulta realizada no local. 
# Neste modelo relacional, temos como principais regras que: 
# 1) Um paciente poderá possuir diversas consultas agendadas, porém cada consulta atenderá apenas um paciente a cada vez; 
# 2) Um médico poderá ter diversas consultas, porém cada consulta deverá ser realizada por um único médico; 
# 3) Cada médico deverá possuir apenas uma especialidade cadastrada em seu registro. Por outro lado, uma especialidade poderá contemplar diversos médicos diferentes registrados no banco.
# Turma 12 - Aluno: Nicholas Ruas Viegas
############################################