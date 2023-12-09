import { Outgoing } from '../Outgoing';
import { OutgoingMessage } from '../OutgoingMessage';

export class RequestDesktopComposer implements OutgoingMessage 
{
    public Header: string = Outgoing.REQUEST_DESKTOP;
}
