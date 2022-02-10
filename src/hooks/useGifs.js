import { useState, useEffect } from "react";
import getGifs from '../services/GetGifs';

export function useGifs({ keyword }) {
    // The state of the loader by default is true.
    const [loading, setLoading] = useState(true);

    // The gifs array and the function that allows to set it.
    const [gifs, setGifs] = useState([]);

    /* Every time that the component is render, calls
       an API from GIPHY specifying the new keyword.
    */
    useEffect(
        function () {
            console.log(`The current value of loading is ${loading}`);
            // Get the gifs array and then set the gifs.
            getGifs({ keyword: keyword }).then((gifs) => {
                setGifs(gifs);
                setLoading(true);
            });
        },
        [keyword] // Keyword is a dependecy value.
    );
    
    // Return the states.
    return { loading, gifs };
}