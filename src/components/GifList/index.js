import './styles.css';
import getGifs from '../../services/GetGifs';
import Gif from '../Gif';
import Loader from '../Loader';
import React, { useEffect, useState } from 'react';

/**
 * This component represents a wrapper to every single
 * gif component. It receives a keyword and base on that
 * keyword it makes a call to an API from GIPHY and then
 * return a rendered component with all the gifs.
 *
 * @param {*} params The parameters passed by the props
 * @returns An componente with the Gifs objects rendered.
 */
export default function GifList({ params }) {
    // The state of the loader.
    const [loading, setLoading] = useState(true);

    // The gifs array and the function that allows to set it.
    const [gifs, setGifs] = useState([]);

    // Get the parameter keyword.
    const { keyword } = params;

    /* Every time that the component is render, calls
       an API from GIPHY specifying the new keyword.
    */
    useEffect(
        function () {
            console.log(`The current value of loading is ${loading}`);
            // Get the gifs array and then set the gifs.
            getGifs({ keyword: keyword }).then((gifs) => {
                setGifs(gifs);
                setLoading(false);
            });
        },
        [keyword] // Keyword is a dependecy value.
    );

    // If the gifs are being setting, show the loader.
    if (loading) return <Loader />;

    // Finally, return a Gif component for every gifs in the array.
    return gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
    ));
}
