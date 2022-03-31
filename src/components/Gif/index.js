import './styles.css';
import React from 'react';
import { Link } from 'wouter';

/**
 * This component reprensents a single gif.
 * @param {*} gif The gif object.
 * @returns A single Gif component.
 */
const Gif = (gif) => {
    // Destructuring the gif into some variables.
    const { title, url, id } = gif;

    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-Link">
                {title.length === 0 ? '' : <h4>{title}</h4>}
                <img loading="eager" alt={title} src={url} />
            </Link>
        </div>
    );
};

/**
 * This function allows to compare the id of every gifs to make
 * React use React.memo()
 * @param {*} prevProps The previous props of the component.
 * @param {*} nextProps The next props of the component.
 * @returns 
 */
const compareId = (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
};

export default React.memo(Gif, compareId);
