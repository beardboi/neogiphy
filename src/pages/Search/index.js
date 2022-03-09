import GifList from 'components/GifList'
import Loader from 'components/Loader'
import { useGifs } from 'hooks/useGifs'

/**
 * Contains the list of gifst that are made being received.
 * @param {*} params The params passed by the father component.
 * It contains the keyword needed to search the gifs.
 * @returns The search results component.
 */
export default function SearchResults({ params }) {
    // Get the params from the path.
    const { keyword } = params

    // Using custom hook.
    const { loading, gifs, setPage } = useGifs({ keyword })

    // Decode the string in the url to a normal string.
    const keywordDecoded = decodeURI(keyword)

    // The function that allows to get the next page of gifs.
    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1)
    }

    /* If the gifs are being setting, show the loader. 
       In the other case, a list of gifs will be rendered. TODO: Clean the code! */
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h4 className="App-Title text-white justify-center">
                        Your search results for "{keywordDecoded}":
                    </h4>
                    <div className="Gifs-Container">
                        <GifList gifs={gifs} />
                    </div>
                </>
            )}
            <button
                className="Search-Button text-white"
                onClick={handleNextPage}
            >
                Get the next gifs
            </button>
        </>
    )
}
