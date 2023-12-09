import { Shroom } from '@jankuss/shroom';
import { NeonEvents } from './events';
import { EventDispatcher } from './events/EventDispatcher';
import { RoomInstance } from './shroom/room/RoomInstance';
import { Socket } from './socket';
import { createShroom } from './utils';

export class Neon extends EventDispatcher
{
    private static instance: Neon;
    private _shroom: Shroom;

    private _socket: Socket;

    private _room: RoomInstance;

    constructor() 
    {
        super();
        this._socket = new Socket();
        this._room = new RoomInstance(this);

        this.on(NeonEvents.SOCKET_OPEN, () =>
        { 
            this._shroom = createShroom('room-canvas');
        })
    }

    public static getInstance(): Neon 
    {
        if (!Neon.instance) 
        {
            Neon.instance = new Neon();
        }

        return Neon.instance;
    }

    public get shroom(): Shroom 
    {
        return this._shroom;
    }

    public get socket(): Socket
    { 
        return this._socket;
    }
}
