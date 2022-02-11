import Loader from "../Loader"
import { useGifs } from "../../hooks/useGifs"
import GifList from "../GifList"

export default function LastSearch() {
    const { loading, gifs } = useGifs()

    if (loading) return <Loader />

    return (
        <>
            <div className="App-Content-Title">
                <h2 className="App-Title text-white">Your last search results</h2>
            </div>
            <div className="App-Content">
                <GifList gifs={gifs}></GifList>
            </div>
        </>
    )
}
