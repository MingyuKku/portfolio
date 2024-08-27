import { IOptions, RecursivePartial } from "@tsparticles/engine";

export const space: RecursivePartial<IOptions> = {
    name: 'space',
    autoPlay: true,
    detectRetina: true,
    fullScreen: {
        enable: true,
        zIndex: 0,
    },
    zLayers: 100,
    background: {
        color: {
            value: '#000',
        },
        opacity: 1,
    },
    responsive: [{
        mode: 'screen',
    }],
    fpsLimit: 120,
    clear: true,
    interactivity: {
        detectsOn: 'window',
        events: {
            resize: {
                enable: true,
                delay: 0.5
            }
        }
    },
    particles: {
        // color: {
        //     value: '#FF7E95',
        // },
        collisions: {
            overlap: {
                enable: true,
                retries: 0,
            }
        },
        color: {
            value: '#fff',
        },
        effect: {
            close: true,
            fill: true,
        },
        move: {
            enable: true,
            direction: 'left',
            drift: 0,
            outModes: {
                default: 'out',
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
            },
            speed: {
                max: 5,
                min: 2,
            },
            angle: {
                offset: {
                    max:3,
                    min:1
                },
                value: {
                    max: 3,
                    min: 1,
                }
            },
            center: {
                x: 50,
                y: 50,
                mode: 'percent',
                radius: 0
            },
            decay: 0,
            size: false,
        },
        number: {
            value: 150,
            limit: {
                mode: 'delete',
                value: 100,
            }
        },
        opacity: {
            value: {
                max: 1,
                min: 0.7,
            },
            animation: {
                enable: true,
                speed: {
                    max: 3,
                    min: 0.5,
                },
                mode: 'random',
                startValue: 'random',
            }
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                max: 2.5,
                min: 0.5,
            },
            // animation: {
            //     enable: true,
            //     speed: {
            //         max: 5,
            //         min: 1,
            //     },
            //     sync: true,
            //     mode: 'auto',
            //     startValue: 'random'
            // },
        },
        zIndex: {
            value: 2,
            // opacityRate: 1,
            // sizeRate: 1,
            // velocityRate: 1
        },
        // collisions: {
        //     enable: true,
        //     absorb: {
        //         speed: 2,
        //     },
        //     overlap: { // 파티클끼리 겹치게 할것인지 설정
        //         enable: false,
        //         retries: 0
        //     }
        // },
    },
}

