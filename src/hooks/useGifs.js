import { useState, useEffect, useContext } from 'react';
import getGifs from '../services/getGifs';
import { getLastKeyword } from '../utils/getLastKeyword';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

/**
 * The custom hook to manage the state of the Search component
 * @param {*} keyword The object that contains the keyword param.
 * @returns The state of the variables loading and gifs.
 */
export function useGifs({ keyword } = { keyword: null }) {
    // The state of the loader by default is false.
    const [loading, setLoading] = useState(false);

    // The state of the loader of the next pages.
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    // The state of the pages.
    const [page, setPage] = useState(INITIAL_PAGE);

    // The gifs array and the function that allows to set it.
    const { gifs, setGifs } = useContext(GifsContext);

    // Check if there is a keyword on the localStorage.
    const keywordToUse = getLastKeyword(keyword);

    /* Every time that the component is render, calls
       an API from GIPHY specifying the new keyword.*/
    useEffect(
        () => {
            // Show loader.
            setLoading(true);

            // Get the gifs array and then set the gifs.
            getGifs({ keyword: keywordToUse }).then((gifs) => {
                setGifs(gifs);
                setLoading(false);
                localStorage.setItem('lastKeyword', keywordToUse);
            });

            return () => {
                setLoading(false);
            }
        },
        [keyword, keywordToUse, setGifs] // Keyword is a dependecy value. // eslint-disable-line react-hooks/exhaustive-deps
    );

    useEffect(() => {
        // The first time it doesn't have to run.
        if (page === INITIAL_PAGE) return;

        setLoadingNextPage(true);

        getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
            setGifs((prevGifs) => prevGifs.concat(nextGifs));
            setLoadingNextPage(false);
        });
    }, [page, setGifs, keywordToUse]);

    // Return the states.
    return { loading, gifs, loadingNextPage, setPage };
}
