import React from 'react';
import LoadParticles from '@/components/ts-particles/Particles'
import { space } from '@/components/ts-particles/options/space';
import CharacterAnimation from '@/components/index-home/Character-animation';

const HomePage = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-viewScreen bg-achromatic-black'>
            <LoadParticles option={ space } />
            <CharacterAnimation />
        </div>
    )
}

export default HomePage
