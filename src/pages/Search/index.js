import GifList from '../../components/GifList';

/**
 * Contains the list of gifst that are made being received.
 * @param {*} params
 * @returns The search results component.
 */
export default function SearchResults({ params }) {
    return (
        <div className="App-Content">
            <GifList params={params} />
        </div>
    );
}
