import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Video from './components/Video';
import Studio from './components/Studio';
import Work from './components/Work';

const locomotiveScroll = new LocomotiveScroll();

function App() {
    return (
        <>
            <div className="main w-full min-h-screen font-PPMori overflow-hidden">
                <Navbar />
                <Hero />
                <Video />
                <Studio />
                <Work />
                <div className='h-screen w-full'></div>
            </div>
        </>
    );
}

export default App;
