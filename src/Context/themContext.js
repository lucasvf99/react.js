import React,{createContext, useState} from "react";

const ThemContext = createContext();

const ThemProvider = ({children}) =>{

    const [theme, setTheme] = useState('dark')

    const handleTheme = (e) => {
        console.log('console desde theme', e)
    }

    const data = {
        theme,
        handleTheme
    }

    return ( 
        <ThemContext.Provider value={data}>
            {children}
        </ThemContext.Provider>
    )
}

export {ThemProvider}
export default ThemContext;