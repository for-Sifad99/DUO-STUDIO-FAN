import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Studio from './components/Studio';

const locomotiveScroll = new LocomotiveScroll();

function App() {
    return (
        <>
            <div className="main w-full min-h-screen text-white bg-[#0F0D0D] font-zando overflow-hidden">
                <Navbar />
                <Hero />
                <Studio />
            </div>
        </>
    );
}

export default App;
