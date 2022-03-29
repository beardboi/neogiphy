import Loader from '../Loader';
import { useGifs } from 'hooks/useGifs';
import GifList from '../GifList';
import { getLastKeyword } from 'utils/getLastKeyword';
import './styles.css';

/**
 * The component that shows the last search made by the user.
 * @returns The Home Component.
 */
export default function Homepage() {
    // Using the custom hook... get the loading state and the gifs array.
    const { loading, gifs } = useGifs();

    // Get the last keyword info and fix the format string.
    const searchKeyword = decodeURI(getLastKeyword());

    const title = 'Your last search was for ';

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="App-Content-Title">
                        <h4>
                            {title}
                            <b>{searchKeyword}</b>
                        </h4>
                    </div>
                    <div className="Gifs-Container">
                        <GifList gifs={gifs} />
                    </div>
                </>
            )}
        </>
    );
}
