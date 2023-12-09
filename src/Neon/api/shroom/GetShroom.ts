import { Shroom } from '@jankuss/shroom';
import { GetNeon } from '../core';

export const GetShroom = (): Shroom =>
{ 
    return GetNeon().shroom;
}
