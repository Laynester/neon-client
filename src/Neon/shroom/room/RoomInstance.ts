import { Room } from '@jankuss/shroom';
import { Neon } from '../../Neon';
import { GetShroom, GetShroomApp } from '../../api';
import { GetMessageHandler } from '../../api/core';
import { NeonEvents } from '../../events';
import { Incoming, TilemapEvent } from '../../socket';

export class RoomInstance
{ 
    private _room: Room;

    constructor(neon: Neon)
    { 
        neon.on(NeonEvents.SOCKET_OPEN, this.onSocketOpen.bind(this))
    }

    private onSocketOpen(): void
    { 
        GetMessageHandler().registerEvent(Incoming.TILE_MAP, this.onTileMap.bind(this));
    }

    private onTileMap(evt: TilemapEvent): void
    { 
        if (!GetShroom()) return;

        if (this._room) this._room.destroy();

        const element = document.getElementById('room-canvas');

        this._room = Room.create(GetShroom(), {
            tilemap: evt.Map,
        });

        
        this._room.x = (element.clientWidth - this._room.roomWidth) / 2;
        this._room.y = (element.clientHeight - this._room.roomHeight) / 2;

        GetShroomApp().stage.addChild(this._room);
    }
}
