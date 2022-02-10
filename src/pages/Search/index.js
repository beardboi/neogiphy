import GifList from '../../components/GifList';
import Loader from '../../components/Loader';
import { useGifs } from '../../hooks/useGifs';

/**
 * Contains the list of gifst that are made being received.
 * @param {*} params The params passed by the father component. 
 * It contains the keyword needed to search the gifs.
 * @returns The search results component.
 */
export default function SearchResults({ params }) {
    // Using custom hook.
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });

    // If the gifs are being setting, show the loader.
    if (loading) return <Loader />;

    return (
        <div className="App-Content">
            <GifList gifs={gifs} />
        </div>
    );
}
