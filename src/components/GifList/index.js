import './styles.css';
import Gif from '../Gif';

/**
 * This component represents a wrapper to every single
 * gif component. It receives a keyword and base on that
 * keyword it makes a call to an API from GIPHY and then
 * return a rendered component with all the gifs.
 *
 * @param {*} gifs The gifs passed by the father component.
 * @returns The GifList component.
 */
export default function GifList({ gifs }) {
    // Finally, return a Gif component for every gifs in the array.
    return gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
    ));
}
