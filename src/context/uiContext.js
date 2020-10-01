import React, { createContext, useState, useEffect } from 'react';

const UIContext = createContext();

const UIProvider = (props) => {
    const [isBack, setIsBack] = useState(false);
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const pathname = window.location.pathname;
    useEffect(() => {
        setIsBack(pathname !== '/' ? true : false);
    }, [pathname]);

    return (
        <UIContext.Provider
            value={{
                isBack,
                setIsBack,
                searchBarOpen,
                setSearchBarOpen,
            }}
        >
            {props.children}
        </UIContext.Provider>
    );
};

export { UIProvider, UIContext };
