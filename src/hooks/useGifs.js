import { useState, useEffect } from 'react'
import getGifs from '../services/GetGifs'

/**
 * The custom hook to manage the state of the Search component
 * @param {*} keyword The object that contains the keyword param.
 * @returns The state of the variables loading and gifs.
 */
export function useGifs({ keyword } = { keyword: null }) {
    // The state of the loader by default is true.
    const [loading, setLoading] = useState(false)

    // The gifs array and the function that allows to set it.
    const [gifs, setGifs] = useState([])

    /* Every time that the component is render, calls
       an API from GIPHY specifying the new keyword.*/
    useEffect(
        function () {
            // Show loader.
            setLoading(true)

            // Check if there is a keyword on the localStorage.
            const keywordToUse = keyword
                ? keyword
                : localStorage.getItem('lastKeyword')

            // Get the gifs array and then set the gifs.
            getGifs({ keyword: keywordToUse }).then((gifs) => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
            })
        },
        [keyword] // Keyword is a dependecy value.
    )

    // Return the states.
    return { loading, gifs, keyword }
}
