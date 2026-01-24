import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Designed = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        gsap.to('body', {
            backgroundColor: 'white',
            color: 'black',
            duration: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#designed',
                start: 'top top',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        });
    }, []);
    
    return (
        <div
            id="designed"
            className="relative min-h-screen w-full py-[11vw]  border-b border-zinc-700"
        >
            <div className="absolute top-[20%] w-full text-center flex justify-center items-center px-[6.5vw]">
                <p className="w-[22%] font-medium tracking-tighter leading-[1.3vw] uppercase">
                    Disgined to bring out the trouth of your brand
                </p>
            </div>
            <div className="element w-full flex justify-between items-center">
                <img
                    className={`w-[24vw] h-full bg-cover transition-all duration-400 ${
                        activeIndex === 0
                            ? 'translate-y-0 rotate-0 opacity-100'
                            : 'translate-y-[10%] rotate-6 opacity-0'
                    }`}
                    src="./experience-1.webp"
                    alt=""
                />
                <div
                    onMouseEnter={() => setActiveIndex(0)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="text-div flex flex-col items-center gap-[8vw] text-[7.5vw] leading-18 h-[8vw] w-full font-medium tracking-tighter overflow-hidden z-10"
                >
                    <h1
                        className={`transition-transform duration-500 ease-out ${
                            activeIndex === 0
                                ? '-translate-y-[13.3vw] text-[#EDBFFF]'
                                : 'translate-y-0'
                        }`}
                    >
                        Strategy
                    </h1>
                    <h1
                        className={`transition-transform duration-500 ease-out ${
                            activeIndex === 0
                                ? '-translate-y-[13.3vw] text-[#EDBFFF]'
                                : 'translate-y-0'
                        }`}
                    >
                        Strategy
                    </h1>
                </div>
                <img
                    className={`w-[24vw] h-full bg-cover transition-all duration-400 ${
                        activeIndex === 2
                            ? 'translate-y-0 rotate-0 opacity-100'
                            : 'translate-y-[10%] rotate-6 opacity-0'
                    }`}
                    src="./experience-2.webp"
                    alt=""
                />
            </div>
            <div className="element w-full flex justify-between items-center -mt-[22.5vw]">
                <img
                    className={`w-[24vw] h-full bg-cover transition-all duration-400 ${
                        activeIndex === 1
                            ? 'translate-y-0 rotate-0 opacity-100'
                            : 'translate-y-[10%] rotate-6 opacity-0'
                    }`}
                    src="./experience-1.webp"
                    alt=""
                />
                <div
                    onMouseEnter={() => setActiveIndex(1)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="text-div flex flex-col items-center gap-[8vw] text-[7.5vw] leading-18 h-[8vw] w-full font-medium tracking-tighter overflow-hidden z-10"
                >
                    <h1
                        className={`transition-transform duration-500 ease-out ${
                            activeIndex === 1
                                ? '-translate-y-[13.3vw] text-[#EDBFFF]'
                                : 'translate-y-0'
                        }`}
                    >
                        Identity
                    </h1>
                    <h1
                        className={`transition-transform duration-500 ease-out ${
                            activeIndex === 1
                                ? '-translate-y-[13.3vw] text-[#EDBFFF]'
                                : 'translate-y-0'
                        }`}
                    >
                        Identity
                    </h1>
                </div>
                <img
                    className={`w-[24vw] h-full bg-cover transition-all duration-400 ${
                        activeIndex === 1
                            ? 'translate-y-0 rotate-0 opacity-100'
                            : 'translate-y-[10%] rotate-6 opacity-0'
                    }`}
                    src="./experience-2.webp"
                    alt=""
                />
            </div>
            <div className="element w-full flex justify-between items-center -mt-[22.5vw]">
                <img
                    className={`w-[24vw] h-full bg-cover transition-all duration-400 ${
                        activeIndex === 2
                            ? 'translate-y-0 rotate-0 opacity-100'
                            : 'translate-y-[10%] rotate-6 opacity-0'
                    }`}
                    src="./experience-1.webp"
                    alt=""
                />
                <div
                    onMouseEnter={() => setActiveIndex(2)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="text-div flex flex-col items-center gap-[8vw] text-[7.5vw] leading-18 h-[8vw] w-full font-medium tracking-tighter overflow-hidden z-10"
                >
                    <h1
                        className={`transition-transform duration-500 ease-out ${
                            activeIndex === 2
                                ? '-translate-y-[13.3vw] text-[#EDBFFF]'
                                : 'translate-y-0'
                        }`}
                    >
                        Experience
                    </h1>
                    <h1
                        className={`transition-transform duration-500 ease-out ${
                            activeIndex === 2
                                ? '-translate-y-[13.3vw] text-[#EDBFFF]'
                                : 'translate-y-0'
                        }`}
                    >
                        Experience
                    </h1>
                </div>
                <img
                    className={`w-[24vw] h-full bg-cover transition-all duration-400 ${
                        activeIndex === 0
                            ? 'translate-y-0 rotate-0 opacity-100'
                            : 'translate-y-[10%] rotate-6 opacity-0'
                    }`}
                    src="./experience-2.webp"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Designed;
