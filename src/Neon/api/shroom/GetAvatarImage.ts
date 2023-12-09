import { BaseAvatar } from '@jankuss/shroom';
import { GetShroom, GetShroomApp } from '..';

export const GetAvatarImage = async () =>
{
    console.log('awaiting ig');
    let result = await new Promise(r =>
    {
        const avatar = BaseAvatar.fromShroom(GetShroom(), {
            look: {
                actions: new Set(),
                direction: 2,
                look: 'hd-180-1.hr-100-61.ch-210-66.lg-280-110.sh-305-62',
            },
            position: { x: 0, y: 0 },
            zIndex: 0,
            onLoad: () => 
            {
                console.log('load');
                r(GetShroomApp()?.renderer?.plugins?.extract?.image(avatar, 'image/png')?.src)
            },
        
        })    
    });

    return result;
}
