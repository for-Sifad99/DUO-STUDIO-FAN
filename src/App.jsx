import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Video from './components/Video';
import Studio from './components/Studio';
import Work from './components/Work';
import Designed from './components/Designed';
import Mentions from './components/Mentions';

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
                <Designed />
                <Mentions />
                <div className='h-screen w-full'></div>
            </div>
        </>
    );
}

export default App;
