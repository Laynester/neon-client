import { Incoming, IncomingMessage, TilemapEvent } from '../incoming';
import { OutgoingMessage } from '../outgoing/OutgoingMessage';
import { EventCallback, IEventHandler } from './IEventHandler';

export class MessageHandler 
{
    private _incoming: Map<string, IncomingMessage>;
    private _listeners: IEventHandler[];

    constructor() 
    {
        this._incoming = new Map();
        this._listeners = [];
        this.registerIncoming();
    }

    private registerIncoming(): void 
    {
        this._incoming.set(Incoming.TILE_MAP, new TilemapEvent());
    }

    public handleMessage(packet: MessageEvent) 
    {
        const decodedBase64 = atob(packet.data);

        console.log(decodedBase64);

        try 
        {
            const json: IncomingMessage = JSON.parse(decodedBase64);

            if (!this._incoming.get(json.Header)) return;
            
            let event = Object.assign(
                Object.create(
                    Object.getPrototypeOf(this._incoming.get(json.Header))
                ),
                this._incoming.get(json.Header)
            );
            event = { ...event, ...json };
            this.dispatchEvent(json.Header, event);
        }
        catch (e) 
        {
            console.log(e);
            return false;
        }
    }

    public dispatchEvent(header: string, event: IncomingMessage)
    {
        for (const evt of this._listeners)
            if (evt.eventName == header) evt.callback(event);
    }

    public buildMessage(msg: OutgoingMessage) 
    {
        return btoa(JSON.stringify(msg));
    }

    public registerEvent(eventName: string, callback: EventCallback) 
    {
        this._listeners.push({ callback, eventName });
    }

    public removeEvent(eventName: string, callback: EventCallback)
    { 
        let index = 0;
        
        for (const evt of this._listeners)
        { 
            index++;
            if (evt.eventName == eventName && evt.callback == callback) break;
        }

        this._listeners.slice(0, index);
    }
}
