import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Studio from './components/Studio';

const locomotiveScroll = new LocomotiveScroll();

function App() {
    return (
        <>
            <div className="main w-full min-h-screen font-zando overflow-hidden">
                <Navbar />
                <Hero />
                <Studio />
                <div className='h-screen w-full'></div>
            </div>
        </>
    );
}

export default App;
