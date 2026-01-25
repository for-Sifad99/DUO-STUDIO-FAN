import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Video from './components/Video';
import Studio from './components/Studio';
import Work from './components/Work';
import Designed from './components/Designed';
import Mentions from './components/Mentions';
import Cursor from './shared/Cursor';
import { CursorProvider } from './Contexts/CursorContext';

const locomotiveScroll = new LocomotiveScroll();

function App() {
    return (
        <>
            <div className="main w-full min-h-screen font-PPMori overflow-hidden">
                <CursorProvider>
                    <Cursor />
                    <Navbar />
                    <Hero />
                    <Video />
                    <Studio />
                    <Work />
                    <Designed />
                    <Mentions />
                    <div className="h-screen w-full"></div>
                </CursorProvider>
            </div>
        </>
    );
}

export default App;
