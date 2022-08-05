package Aula24;

public class Main {

    public static void main(String[] args) {

        Instituto digitalHouse = new Instituto("DH");

        OfertaAcademica frontEnd = OfertaAcademicaFactory.getInstancia().criarOfertaAcademica(OfertaAcademicaFactory.CURSO);
        ((Curso)frontEnd).setNome("Front-End");
        ((Curso)frontEnd).setCargaHoraria(6.0);
        ((Curso)frontEnd).setDuracao(2.0);
        ((Curso)frontEnd).setValorHora(1000.00);


        OfertaAcademica backEnd =  OfertaAcademicaFactory.getInstancia()
                .criarOfertaAcademica(OfertaAcademicaFactory.CURSO);
        ((Curso)backEnd).setNome("Back-End");
        ((Curso)backEnd).setCargaHoraria(20.0);
        ((Curso)backEnd).setDuracao(2.0);
        ((Curso)backEnd).setValorHora(900.00);

        digitalHouse.adicionar(frontEnd);
        digitalHouse.adicionar(backEnd);

        OfertaAcademica programaFullStack =  OfertaAcademicaFactory.getInstancia()
                .criarOfertaAcademica(OfertaAcademicaFactory.PROGRAMA_INTENSIVO);

        ((ProgramaIntensivo)programaFullStack).setNome("Intensivão");
        ((ProgramaIntensivo)programaFullStack).setPorcentagemBonificacao(20.0);

        ((ProgramaIntensivo) programaFullStack).adicionar(backEnd);
        ((ProgramaIntensivo) programaFullStack).adicionar(frontEnd);

        digitalHouse.adicionar(programaFullStack);


        OfertaAcademica workshop = OfertaAcademicaFactory.getInstancia()
                    .criarOfertaAcademica(OfertaAcademicaFactory.WORKSHOP);
        workshop.setNome("Inteligência Emocional");
        ((Workshop)workshop).setQuantidade(1);
        ((Workshop)workshop).setValor(1000.00);

        digitalHouse.adicionar(workshop);


        OfertaAcademica carreira = OfertaAcademicaFactory.getInstancia().criarOfertaAcademica(
                OfertaAcademicaFactory.CARREIRA);
        carreira.setNome("Carreira Salada de Fruta");
        ((Carreira)carreira).setPrecoBase(100.00);

        try {
            ((Carreira)carreira).adicionarCarreira(workshop);
            ((Carreira)carreira).adicionarCarreira(frontEnd);
        } catch (Exception e) {
            e.printStackTrace();
        }


        digitalHouse.adicionar(carreira);


        digitalHouse.gerarInformeOferta();


    }
}
