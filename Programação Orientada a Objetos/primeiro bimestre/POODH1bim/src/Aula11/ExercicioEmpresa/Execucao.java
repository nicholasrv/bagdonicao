package Aula11.ExercicioEmpresa;

public class Execucao {
    public static void main(String[] args) {
        Funcionario funcionarioGerente = new Gerente ("Nicholas", "Viegas", "422.816.318-18", "nicholasrv@live.com", 500.0);
        funcionarioGerente.pagamento();


        System.out.println("Nome: " + funcionarioGerente.getNome());
        System.out.println("Salario " + funcionarioGerente.pagamento());

        //exemplos de casting:

        System.out.println("Gerente do tipo: " + ((Gerente) funcionarioGerente).definirAreaGerente());
        System.out.println("Parabens, voce foi promovido para gerente: " + ((Gerente) funcionarioGerente).definirAreaGerente("Comercial"));
        ;

        //Poderiamos instanciar secretarias de diversas formas, conforme os exemplos abaixo:

        Object s1 = new Secretaria("Mariana", "Silva", "569.145.217-22", "mariana.silva@aloha.com", 6000.00);
        Funcionario s2 = new Secretaria("Juliana", "Mendes", "327.098.456-19", "juliana.mendes@aloha.com", 8000.00);
        Secretaria s3 = new Secretaria("Aloha", "Aloha", "987.486.873-22", "aloha@aloha.com", 3000.00);
    };
}
