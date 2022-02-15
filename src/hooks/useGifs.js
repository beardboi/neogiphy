import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import { getLastKeyword } from '../utils/getLastKeyword'
import GifsContext from '../context/GifsContext'

/**
 * The custom hook to manage the state of the Search component
 * @param {*} keyword The object that contains the keyword param.
 * @returns The state of the variables loading and gifs.
 */
export function useGifs({ keyword } = { keyword: null }) {
    // The state of the loader by default is false.
    const [loading, setLoading] = useState(false)

    // The gifs array and the function that allows to set it.
    const {gifs, setGifs} = useContext(GifsContext)

    /* Every time that the component is render, calls
       an API from GIPHY specifying the new keyword.*/
    useEffect(
        function () {
            // Show loader.
            setLoading(true)

            // Check if there is a keyword on the localStorage.
            const keywordToUse = getLastKeyword(keyword)

            // Get the gifs array and then set the gifs.
            getGifs({ keyword: keywordToUse }).then((gifs) => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
            })
        },
        [keyword, setGifs] // Keyword is a dependecy value. // eslint-disable-line react-hooks/exhaustive-deps
    )

    // Return the states.
    return { loading, gifs }
}
