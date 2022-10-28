package com.odontologica.clinica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClinicaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClinicaApplication.class, args);
	}

//	Por exemplo, um Paciente de uma clinica pode ter "Consultas" com vários Dentistas, e o mesmo Dentista pode ter “Consultas” com muitos Pacientes.
//	Neste caso, precisamos criar uma tabela separada para armazenar as chaves. Esta tabela de combinação aparece com o nome “Consultas”.
//	A combinação das chaves estrangeiras será sua chave primária composta.


}
