import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Video = () => {

    useEffect(() => {
        gsap.to('#video-div video', {
            width: '86%',
            scrollTrigger: {
                trigger: '#video-div',
                start: 'top bottom',
                end: 'top top',
                scrub: 3,
            },
        });
    }, []);

    return (
        <div id="video-div" className="w-full">
            <video
                className="relative left-[50%] w-[50%] -translate-x-[50%] mt-[12vw]"
                autoPlay
                loop
                muted
                src="./duo-reel-video.mp4"
            ></video>
        </div>
    );
};

export default Video;
