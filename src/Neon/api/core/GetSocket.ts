import { Socket } from '../../';
import { GetNeon } from './GetNeon';

export const GetSocket = (): Socket => 
{
    return GetNeon().socket;
};
