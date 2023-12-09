import './assets/main.css';
import { Hotelview } from './interface/hotelview/HotelView';
import { Room } from './interface/room';

export const App = () => 
{
    return (
        <>
            <Room />
            <Hotelview/>
        </>
    );
}
