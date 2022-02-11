import './styles.css';
import React from 'react';
import { Link } from 'wouter';

/**
 * This component reprensents a single gif.
 * @param {*} gif The gif object.
 * @returns A single Gif component.
 */
export default function Gif(gif) {
    // Destructuring the gif into some variables.
    const { title, url, id } = gif;

    return (
        <div className="Gif-Container">
            <Link to={`/gif/${id}`} className="Gif-Link">
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url} />
            </Link>
        </div>
    );
}
