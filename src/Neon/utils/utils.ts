import { Shroom } from '@jankuss/shroom';
import * as PIXI from 'pixi.js';

export const createShroom = (viewName: string) => 
{
    return Shroom.create({
        application: new PIXI.Application({
            antialias: false,
            resolution: window.devicePixelRatio,
            view: document.getElementById(viewName) as HTMLCanvasElement,
            backgroundAlpha: 0,
            autoDensity: true,
            height: document.body.clientHeight,
            width: document.body.clientWidth
        }),
        resourcePath: 'http://localhost/shroom-assets/public/resources',
    });
};
