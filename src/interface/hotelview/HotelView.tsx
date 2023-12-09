import { useEffect } from 'react';
import { GetAvatarImage, GetNeon, NeonEvents, RequestDesktopComposer } from '../../Neon';
import { sendMessage } from '../hooks';

export const Hotelview = () =>
{ 
    GetNeon().on(NeonEvents.SOCKET_OPEN, () =>
    { 
        sendMessage(new RequestDesktopComposer());
        console.log('test');
        (async () => 
        {
            console.log('test2');
            console.log(await GetAvatarImage()) 
        })();
    })

    useEffect(() =>
    { 
    },[])

    return <div></div>
}
