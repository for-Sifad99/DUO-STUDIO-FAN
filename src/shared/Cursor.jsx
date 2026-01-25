import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 z-9999 pointer-events-none"
            style={{
                transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
            }}
        >
            <div className="w-4 h-4 rounded-full bg-[#EDBFFF] mix-blend-difference"></div>
        </div>
    );
};

export default Cursor;
