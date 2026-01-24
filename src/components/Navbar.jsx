import React from 'react';

const Navbar = () => {
    return (
        <div className="nav w-full h-13.75 flex items-center justify-between px-6">
            <img className='h-6' src="./home-logo-img.svg" alt="Navbar left logo" />
            <div className="links flex justify-center items-center gap-3 text-[15px] font-medium capitalize">
                <h3 className='leading-4 border-b-[1.5px] border-white'>Home</h3>
                <h3>Work</h3>
                <h3>Studio</h3>
                <h3>Contact</h3>
            </div>
            <div className='nav-last w-5 h-5 rounded-full bg-white'>
            </div>
        </div>
    );
};

export default Navbar;
