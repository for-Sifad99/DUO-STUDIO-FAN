import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Studio = () => {

    useEffect(() => {
        gsap.to('body', {
            backgroundColor: 'white',
            color: 'black',
            duration: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#studio',
                start: 'top top',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        });
    }, []);

    return (
        <div id="studio" className="w-full h-screen py-[11vw] px-[6.5vw] border-b border-zinc-700">
            <h2
                id="head-text"
                className="text-[4vw] tracking-tight font-semibold"
            >
                We are Duo Studio,
            </h2>
            <div
                id="middle-container"
                className="w-full h-[70%] flex items-center justify-between mt-[2vw]"
            >
                <div id="left-text" className="w-[30%]">
                    <h1 className="text-[3vw] font-medium tracking-tighter leading-10.5">
                        A CREATIVE COLLECTIVE MADE TO UNLOCK YOUR BRANDS'S
                        POTENTIAL
                    </h1>
                </div>
                <div
                    id="right-text"
                    className="flex flex-col justify-between gap-3 w-[22%] h-[80%] mt-auto"
                >
                    <p className="text-[1.4vw] font-normal tracking-tighter leading-4">
                        We weave togather bold strategy and creative execution
                        to produce throught-provoking digital experiences. We
                        take a highly personalized approach to delivering
                        branding, web design, and content marketing solutions.
                        Born in the DC area - now serving clients worldwide.
                    </p>

                    <button className="w-full py-1 bg-[#EDBFFF] text-xs text-black rounded-full capitalize font-bold">
                        About Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Studio;
