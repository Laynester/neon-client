import { MessageHandler } from '../../';
import { GetSocket } from './GetSocket';

export const GetMessageHandler = (): MessageHandler => 
{
    return GetSocket().messageHandler;
};
