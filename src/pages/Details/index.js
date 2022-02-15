import { useContext } from 'react'
import Context from '../../context/GifsContext'
import Gif from '../../components/Gif'
import './styles.css'

/**
 * The page that shows the detail of a gif given its id.
 * @param {*} params The object that contains the params.
 * @returns The Details component.
 */
export default function Details({ params }) {
    const { gifs } = useContext(Context)

    const gif = gifs.find((gif) => gif.id === params.id)

    return (
        <div className="Gif-Detail-Container">
            <Gif className="Gif-Details" {...gif} />
        </div>
    )
}
