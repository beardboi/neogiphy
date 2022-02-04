import './Gif.css';
import React from 'react';

/**
 * This component reprensents a single gif.
 * @param {*} gif The gif object.
 * @returns A single Gif component.
 */
export default function Gif(gif) {
    console.log(gif);

    // Destructuring the gif into some variables.
    const { title, url } = gif;

    return (
        <div className="Gif-Container">
            {/* <div className="Gif-Title">
                <h4>{title}</h4>
            </div> */}
            <div className="Gif-Image">
                <a href={url}>
                    <img alt={title} src={url} />
                </a>
            </div>
            {/* <div class>
                <small>{id}</small>
            </div> */}
        </div>
    );
}
