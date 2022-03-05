import Loader from '../Loader'
import { useGifs } from 'hooks/useGifs'
import GifList from '../GifList'
import { getLastKeyword } from 'utils/getLastKeyword'

/**
 * The component that shows the last search made by the user.
 * @returns The LastSearchComponent.
 */
export default function LastSearch() {
    // Using the custom hook... get the loading state and the gifs array.
    const { loading, gifs } = useGifs()

    // Get the last keyword info and fix the format string.
    const keyword = decodeURI(getLastKeyword())

    if (loading) return <Loader />

    return (
        <div>
            <h2 className="App-Title">
                Your last search results was for "{keyword}:"
            </h2>
            <div className="Gifs-Container">
                <GifList gifs={gifs} />
            </div>
        </div>
    )
}
