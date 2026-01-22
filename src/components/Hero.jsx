import React, { useEffect } from 'react';
import gsap from 'gsap';
import { TbHandLittleFinger } from 'react-icons/tb';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#head-line',
                scroller: 'body',
                start: 'top 30%',
                end: 'top 0%',
                scrub: 3,
            },
        });

        tl.to(
            '#top-head',
            {
                scale: 1,
            },
            'animate'
        );
        tl.to(
            '#left-head',
            {
                x: -100,
            },
            'animate'
        );
        tl.to(
            '#right-head',
            {
                x: 100,
            },
            'animate'
        );
        tl.to(
            '#video-div video',
            {
                width: '86%',
            },
            'animate'
        );
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-[11%]">
            <div
                id="head-line"
                className="text-[6.2vw] font-medium leading-20 tracking-tighter pb-[3%]"
            >
                <h1 id="top-head" className="whitespace-nowrap scale-[0.95]">
                    welc
                    <div className="inline-block w-[5vw] h-[4.2vw] -mr-0.5 ml-1 bg-white rounded-full">
                        <div className="w-full h-full flex items-center justify-center">
                            <TbHandLittleFinger
                                fill="#0F0D0D"
                                className="-rotate-20 text-5xl text-zinc-800"
                            />
                        </div>
                    </div>
                    me
                </h1>
                <h1 id="left-head">A design studio made</h1>
                <h1 id="right-head">to elevat your brand</h1>
            </div>
            <p
                id="boom-p"
                className="w-[35%] text-[1.1vw] font-light tracking-tight leading-5"
            >
                We build brand identities, creative websites, and visula
                narraives that showcase the full extent of your potential, Based
                on Baltimore, work with client world-wide.
            </p>

            <div id="video-div" className="w-full">
                <video
                    className="relative left-[50%] w-[50%] -translate-x-[50%] mt-[12vw]"
                    autoPlay
                    loop
                    muted
                    src="./duo-reel-video.mp4"
                ></video>
            </div>
        </div>
    );
};

export default Hero;
