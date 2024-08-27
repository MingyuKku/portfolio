'use client'

import React from 'react';

const CharacterAnimation = () => {


    const createAnimationInfo = (sources: {
        speed: {
            max: number;
            min: number;
        } | number;
    }[]) => {
        return [
            {
                src: '/images/zzangu.png',
                speed: typeof sources[0].speed === 'number' ? sources[0].speed : Math.random() * (sources[0].speed.max - sources[0].speed.min + 1) + sources[0].speed.min
            }
        ]
    }
    

    React.useEffect(() => {
        // const test = createAnimationInfo({
        //     source1: {
        //         speed: {
        //             max: 5,
        //             min: 2
        //         }
        //     }
        // })

        // console.log('호잇', test)
    }, [])

    return (
        <div className='fixed top-0 left-0 w-full h-viewScreen'>
            
        </div>
    )
}

export default CharacterAnimation;