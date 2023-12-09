
export interface INeonConfig
{ 
    socket: string; 
}

export const GetNeonConfig = (): INeonConfig =>
{
    //@ts-ignore
    return NeonConfig;
};
