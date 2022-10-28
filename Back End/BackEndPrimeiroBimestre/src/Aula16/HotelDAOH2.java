package Aula16;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Logger;

public class HotelDAOH2 implements IDao<Hotel>{
    private Aula16.ConfiguracaoJDBC configuracaoJDBC;

    final static Logger log = Logger.getLogger(String.valueOf(HotelDAOH2.class));

    public HotelDAOH2(ConfiguracaoJDBC configuracaoJDBC){
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Hotel salvar(Hotel hotel){
        log.info("Registrando um novo hotel: "+hotel.toString());
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String query = String.format("INSERT INTO hotel(nome,rua,numero,cidade,estado,e5estrelas) values ('%s','%s','%s','%s','%s','%s')",
                hotel.getNome(),hotel.getRua(),hotel.getNumero(),hotel.getCidade(),hotel.getEstado(), hotel.isE5estrelas());

        try{
            statement = connection.createStatement();
            statement.executeUpdate(query,Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = statement.getGeneratedKeys();

            if(keys.next()){
                hotel.setId(keys.getInt(1));
                statement.close();
                connection.close();
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return hotel;
    }

}
