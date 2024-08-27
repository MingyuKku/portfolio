'use client'

import React from 'react';
// import Particles, { initParticlesEngine } from '@tsparticles/react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { ISourceOptions } from '@tsparticles/engine';
import { loadFull } from "tsparticles";
import { space } from './options/space';


interface Props {
    className?: string;
    setIsLoadParticle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadParticles: React.FC<Props> = ({ className, setIsLoadParticle }) => {

    const [ init, setInit ] = React.useState<boolean>(false);


    React.useEffect(() => {

        initParticlesEngine(async (engine) => {
            // await loadEmittersPlugin(tsParticles as unknown as EmittersEngine);
            await loadFull(engine);
        })
        .then(() => {
            setInit(true);
            if (setIsLoadParticle) setIsLoadParticle(true);
        });


        return () => {
            if (setIsLoadParticle) setIsLoadParticle(false);
        }
    }, []);
    

    if (init) {
        return (
            <Particles
                id="tsparticles-shape"
                options={ space }
                className={`${ className ?? '' }`}
            />
        );
    }
    return <></>;
}

export default LoadParticles;
