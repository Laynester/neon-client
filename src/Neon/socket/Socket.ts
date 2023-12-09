import { GetNeon, GetNeonConfig } from '../api';
import { NeonEvents } from '../events/NeonEvents';
import { MessageHandler, OutgoingMessage, PingComposer } from './messages';

export class Socket 
{
    private _connection: WebSocket;

    private _messageHandler: MessageHandler;

    constructor() 
    {
        this._messageHandler = new MessageHandler();
        this._connection = new WebSocket(GetNeonConfig().socket);

        this._connection.onmessage = this.onMessage.bind(this);
        this._connection.onopen = this.onOpen.bind(this);
    }

    private onOpen() 
    {
        this.send(new PingComposer());

        GetNeon().dispatch(NeonEvents.SOCKET_OPEN);
    }

    private onMessage(message: MessageEvent): void 
    {
        this._messageHandler.handleMessage(message);
    }

    public send(msg: OutgoingMessage): void
    { 
        this._connection.send(
            this._messageHandler.buildMessage(msg)
        );
    }

    public get connection(): WebSocket
    { 
        return this._connection;
    }

    public get messageHandler(): MessageHandler
    { 
        return this._messageHandler;
    }
}
