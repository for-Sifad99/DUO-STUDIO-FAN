import React from 'react';

const Work = () => {
    return (
        <div
            id="selected-works"
            className="w-full min-h-screen py-[11vw] px-[6.5vw] border-b border-zinc-700"
        >
            <h2 className="text-[6vw] font-medium leading-10">Selecetd</h2>
            <h2 className="text-[6vw] font-medium">Works</h2>
            <div>
                <div className="relative w-full flex justify-between">
                    <div className="w-[50%] h-[40%]">
                        <img
                            className="h-full w-[70%] mt-52"
                            src="./mgny-img.jpg"
                            alt=""
                        />
                        <div>
                            <h3 className="mt-3 text-2xl font-medium tracking-tighter">
                                MGNY
                            </h3>
                            <p className="text-sm tracking-tight leading-4">
                                Brand Strategy, Website, Creative Direction,
                                Illustration
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full -mt-[5.5vw] absolute left-[64.489%]">
                        <div className="w-[35.5%] aspect-9/11 overflow-hidden">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                src="./madegood-reduced.mp4"
                            />
                        </div>
                        <div>
                            <h3 className="mt-3 text-2xl font-medium tracking-tighter">
                                MadeGood
                            </h3>
                            <p className="text-sm tracking-tight leading-4">
                                Brand Strategy, Website
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full flex justify-between px-[6vw]">
                    <div className="w-[50%] h-full mt-[24vw]">
                        <div className="w-[84%] aspect-9/11 overflow-hidden">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                src="./cruefilms-reduced.mp4"
                            />
                        </div>

                        <div>
                            <h3 className="mt-3 text-2xl font-medium tracking-tighter">
                                Cruefilms
                            </h3>
                            <p className="text-sm tracking-tight leading-4">
                                Brand Strategy, Website
                            </p>
                        </div>
                    </div>
                    <div className="w-[50%] h-[56%] absolute left-[57%]">
                        <img
                            className="h-full w-[72%]"
                            src="./casestudy-finturity-img.webp"
                            alt=""
                        />
                        <div>
                            <h3 className="mt-3 text-2xl font-medium tracking-tighter">
                                Finturity
                            </h3>
                            <p className="text-sm tracking-tight leading-4">
                                Brand Strategy, Brand Identity, Website, Graphic
                                Design
                            </p>
                        </div>

                        <div className="mt-[14.95vw] w-[72%]">
                            <p className='text-sm tracking-tight leading-4 mb-3'>
                                Browse our work and get inspired by the
                                possibilities we can create together.
                            </p>
                            <button className="px-6 py-1.5 bg-[#EDBFFF] text-[0.9vw] text-black rounded-full capitalize font-medium">
                                See All Works
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
