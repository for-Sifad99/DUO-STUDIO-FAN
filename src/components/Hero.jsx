import React from 'react';
import { TbHandLittleFinger } from 'react-icons/tb';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-[11%]">
            <div className="text-[6.2vw] font-medium leading-20 tracking-tighter pb-[3%]">
                <h1 id='top-head' className="whitespace-nowrap">
                    welc
                    <div className="inline-block w-[5vw] h-[4.2vw] -mr-0.5 ml-1 bg-white rounded-full">
                        <div className="w-full h-full flex items-center justify-center">
                            <TbHandLittleFinger fill='#0F0D0D' className="-rotate-20 text-5xl text-zinc-800" />
                        </div>
                    </div>
                    me
                </h1>
                <h1 id='left-head'>A design studio made</h1>
                <h1 id='right-head'>to elevat your brand</h1>
            </div>
            <p id='boom-p' className="w-[35%] text-[1.1vw] font-light tracking-tight leading-5">
                We build brand identities, creative websites, and visula narraives that showcase the full extent of your potential, Based on Baltimore, work with client world-wide.
            </p>
        </div>
    );
};

export default Hero;
