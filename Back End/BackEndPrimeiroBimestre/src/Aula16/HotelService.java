package Aula16;

public class HotelService {

    private Aula16.IDao<Hotel> hotelIDao;

    public HotelService(IDao<Hotel> hotelIDao){

        this.hotelIDao = hotelIDao;
    }

    public Hotel salvar(Hotel hotel){
        return hotelIDao.salvar(hotel);
    }

}
