import React from 'react'
import useGifs from '../hooks/useGifs'

const Context = React.createContext({})

export function GifsContextProvider({ children }) {
    const [gifs, setGifs] = useGifs([])

    return (
        <Context.Provider value={(gifs, setGifs)}>{children}</Context.Provider>
    )
}

export default Context
