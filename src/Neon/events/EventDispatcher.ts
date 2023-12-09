import { NeonEvents } from './NeonEvents';

export class EventDispatcher
{ 
    private _listeners: { [key: string]: Function[] };

    constructor() 
    {
        this._listeners = {};
    }
    
    public on(eventType: NeonEvents, callback: Function): void
    {
        if (!this._listeners[eventType]) this._listeners[eventType] = [];

        this._listeners[eventType].push(callback);
    }
    
    public off(eventType: NeonEvents, callback: Function): void
    {
        const listeners = this._listeners[eventType];

        if (listeners) 
            this._listeners[eventType] = listeners.filter(listener => listener !== callback);
    }
    
    public dispatch(eventType: NeonEvents, ...args: any[]): void
    {
        const listeners = this._listeners[eventType];

        if (listeners) 
            listeners.forEach(listener => 
            {
                listener(...args);
            });
    }
}
