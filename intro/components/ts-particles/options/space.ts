import { IOptions, ISourceOptions, RecursivePartial, ZIndex } from "@tsparticles/engine";

export const space: ISourceOptions = {
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
        },
        zIndex: {
            value: 2,
            // opacityRate: 1,
            // sizeRate: 1,
            // velocityRate: 1
        },
    },
    // emitters: [
    //     {
    //         autoPlay: true,
    //         fill: true,
    //         life: {
    //             // wait: false,
    //             count: 1,
    //             duration: 10,
    //         },
    //         rate: {
    //             quantity: 1,
    //             delay: 10,
    //         },
    //         direction: 'left',
    //         particles: {
    //             shape: {
    //                 type: 'images',
    //                 options: {
    //                     images: [
    //                         {
    //                             src: '/images/zzangu.png',
    //                             width: 237,
    //                             height: 227
    //                         },
    //                         // {
    //                         //     src: '/images/whitey.png',
    //                         //     width: 237,
    //                         //     height: 227
    //                         // },
                            
    //                     ]
    //                 }
    //             },
    //             size: {
    //                 value: 40,
    //             },
    //             number: {
    //                 value: 1,
    //             },
    //             move: {
    //                 speed: 10,
    //                 outModes: {
    //                     default: 'out',
    //                     bottom: 'out',
    //                     left: 'out',
    //                     right: 'out',
    //                     top: 'out',
    //                 },
    //             },
    //             opacity: {
    //                 value: 1,
    //                 animation: {
    //                     enable: false,
    //                 }
    //             },
    //             rotate: {
    //                 value: {
    //                     max: 360,
    //                     min: 0,
    //                 },
    //                 animation: {
    //                     enable: true,
    //                     speed: 5,
    //                     sync: true,
    //                 },
    //             },
    //             zIndex: {
    //                 value: 2,
    //             }
    //         },
    //         position: {
    //             x: -5, // 방출기의 X 좌표 (가로 위치, 0~100 사이의 비율)입니다.
    //             y: 55,
    //         }
    //     },
    //     {
    //         autoPlay: true,
    //         fill: true,
    //         life: {
    //             count: 1,
    //             duration: 10,
    //         },
    //         rate: {
    //             quantity: 1,
    //             delay: 10,
    //         },
    //         direction: 'left',
    //         size: {
    //             mode: 'percent',
    //             width: 50, // 발사되는 영역의 크기
    //             height: 50,
    //         },
    //         particles: {
    //             shape: {
    //                 type: 'images',
    //                 options: {
    //                     images: [
    //                         // {
    //                         //     src: '/images/zzangu.png',
    //                         //     width: 237,
    //                         //     height: 227
    //                         // },
    //                         {
    //                             src: '/images/whitey.png',
    //                             width: 237,
    //                             height: 227
    //                         },
                            
    //                     ]
    //                 }
    //             },
    //             size: {
    //                 value: 40,
    //             },
    //             number: {
    //                 value: 1,
    //             },
    //             move: {
    //                 speed: {
    //                     max: 8,
    //                     min: 7
    //                 },
    //                 outModes: {
    //                     default: 'out',
    //                     bottom: 'out',
    //                     left: 'out',
    //                     right: 'out',
    //                     top: 'out',
    //                 },
    //             },
    //             opacity: {
    //                 value: 1,
    //                 animation: {
    //                     enable: false,
    //                 }
    //             },
    //             rotate: {
    //                 value: {
    //                     max: 360,
    //                     min: 0,
    //                 },
    //                 animation: {
    //                     enable: true,
    //                     speed: {
    //                         max: 5,
    //                         min: 2,
    //                     },
    //                     sync: true,
    //                 },
    //             },
    //             zIndex: {
    //                 value: 2,
    //             }
    //         },
    //         position: {
    //             x: -5, // 방출기의 X 좌표 (가로 위치, 0~100 사이의 비율)입니다.
    //             y: 50,
    //         }
    //     }
    // ]
}

