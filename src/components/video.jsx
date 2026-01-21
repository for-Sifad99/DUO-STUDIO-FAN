import React from 'react';

const Video = () => {
    return (
<div className='min-h-screen w-full'>
    <video className='ml-[20vw] w-[60vw] mt-[12vw]' autoPlay loop muted src="./duo-reel-video.mp4"></video>
</div>
    )
};

export default Video;
