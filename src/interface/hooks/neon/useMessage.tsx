import { useEffect } from 'react';
import { EventCallback } from '../../../Neon';
import { GetMessageHandler } from '../../../Neon/api/core/GetMessageHandler';

export const useMessage = (eventName: string, handler: EventCallback) => 
{ 
    useEffect(() =>
    { 
        GetMessageHandler().registerEvent(eventName, handler);

        return () => GetMessageHandler().removeEvent(eventName, handler);
    }, [ eventName, handler ])
}
