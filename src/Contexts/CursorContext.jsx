import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {

    const [cursorState, setCursorState] = useState({
        active: false,
        width: 16,
        height: 16,
        rounded: true,
        image: null,
    });

    return(
        <CursorContext.Provider value={{cursorState, setCursorState}}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);
