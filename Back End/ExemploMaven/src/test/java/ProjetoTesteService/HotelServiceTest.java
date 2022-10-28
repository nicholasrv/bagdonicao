package ProjetoTesteService;

import ProjetoTesteMaven.dao.ConfiguracaoJDBC;
import ProjetoTesteMaven.dao.impl.HotelDAOH2;
import ProjetoTesteMaven.model.Hotel;
import ProjetoTesteMaven.service.HotelService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class HotelServiceTest {

    HotelService hotelService;

    @BeforeEach
    void doBefore(){
        hotelService = new HotelService(new HotelDAOH2(new ConfiguracaoJDBC()));
    }

    @Test
    public void salvarHotel(){
        Hotel hotel = new Hotel("Hotel Monte Verde", "Rua das Palmeiras", "1980", "Curitiba", "PR", false);
        hotelService.salvar(hotel);
        assertTrue(hotel.getId()!=null);

        Hotel hotel1 = new Hotel("Hotel Monte Negro", "Rua dos Papagaios", "4857", "Uberlandia", "MG", true);
        hotelService.salvar(hotel1);
        assertTrue(hotel.getId()!=null);

        Hotel hotel2 = new Hotel("Hotel Palm Springs", "Rua Clemente Bastos", "657", "Itapira", "SP", true);
        hotelService.salvar(hotel2);
        assertTrue(hotel.getId()!=null);

        Hotel hotel3 = new Hotel("Hotel Pop Century", "Avenida Epitacio Pessoa", "865", "Santos", "SP", false);
        hotelService.salvar(hotel3);
        assertTrue(hotel.getId()!=null);

        Hotel hotel4 = new Hotel("Hotel Rosa dos Ventos", "Avenida Osvaldo Aranha", "800", "Porto Alegre", "RS", true);
        hotelService.salvar(hotel4);
        assertTrue(hotel.getId()!=null);

    }
}
