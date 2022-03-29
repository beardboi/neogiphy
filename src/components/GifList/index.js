import './styles.css';
import Gif from '../Gif';
import Masonry from 'react-masonry-css';

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
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    // Finally, return a Gif component for every gifs in the array.
    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="Gifs-Container"
                columnClassName="Gifs-Container_Column"
            >
                {gifs.map(({ id, title, url }) => (
                    <Gif key={id} id={id} title={title} url={url} />
                ))}
            </Masonry>
        </>
    );
}
