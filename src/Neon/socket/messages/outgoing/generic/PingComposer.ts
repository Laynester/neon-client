import { Outgoing } from '../Outgoing';
import { OutgoingMessage } from '../OutgoingMessage';

export class PingComposer implements OutgoingMessage 
{
    public Header: string = Outgoing.PING;
}
