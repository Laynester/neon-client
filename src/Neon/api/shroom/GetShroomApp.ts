import { Application } from 'pixi.js';
import { GetNeon } from '../core';

export const GetShroomApp = (): Application =>
{ 
    return GetNeon().shroom.dependencies.application;
}
