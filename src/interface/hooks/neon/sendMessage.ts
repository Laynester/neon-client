import { OutgoingMessage } from '../../../Neon';
import { GetSocket } from '../../../Neon/api/core/GetSocket';

export const sendMessage = (msg: OutgoingMessage) =>
{ 
    GetSocket().send(msg);
}
