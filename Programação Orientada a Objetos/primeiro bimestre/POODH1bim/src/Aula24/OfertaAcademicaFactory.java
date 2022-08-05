package Aula24;

import com.sun.org.apache.bcel.internal.generic.RETURN;

public class OfertaAcademicaFactory {

    private static OfertaAcademicaFactory factory = null;

    public static final String CURSO = "CURSO";
    public static final String PROGRAMA_INTENSIVO = "PROGRAMA_INTENSIVO";
    public static final String WORKSHOP = "WORKSHOP";
    public static final String CARREIRA = "CARREIRA";

    private OfertaAcademicaFactory(){}

    public static OfertaAcademicaFactory getInstancia(){
        if(factory == null){
            factory = new OfertaAcademicaFactory();
        }
        return factory;
    }

    public OfertaAcademica criarOfertaAcademica(String tipo){
        switch(tipo){
            case OfertaAcademicaFactory.CURSO:
                return new Curso();
            case  OfertaAcademicaFactory.PROGRAMA_INTENSIVO:
                return new ProgramaIntensivo();
            case OfertaAcademicaFactory.WORKSHOP:
                return new Workshop();
            case OfertaAcademicaFactory.CARREIRA:
                return new Carreira();
        }
        return null;
    }

}
