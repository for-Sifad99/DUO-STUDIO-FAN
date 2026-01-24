import React, { useEffect } from 'react';
import gsap from 'gsap';
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
                className="text-[7.5vw] font-medium leading-22 tracking-tighter pb-[6%]"
            >
                <h1 id="left-head">A design studio made</h1>
                <h1 id="right-head">to elevate your brand</h1>
            </div>
            <p
                id="boom-p"
                className="w-[30%] text-[1.25vw] font-lighter tracking-tight leading-5"
            >
                We build brand identities, creative websites, and visula
                narraives that showcase the full extent of your potential, Based
                on Baltimore, work with client world-wide.
            </p>
        </div>
    );
};

export default Hero;
