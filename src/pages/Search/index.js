import { useEffect } from 'react';
import { useGifs } from 'hooks/useGifs';
import debounce from 'just-debounce-it';
import GifList from 'components/GifList';
import Loader from 'components/Loader';
import useElementOnScreen from 'hooks/useElementOnScreen';
import './styles.css';

/**
 * Contains the list of gifst that are made being received.
 * @param {*} params The params passed by URL.
 * It contains the keyword needed to search the gifs.
 * @returns The search results component.
 */
export default function SearchResults({ params }) {
    // Get the params from the path.
    const { keyword } = params;

    // The keyword that is showed on the title.
    const searchKeyword = decodeURI(keyword);

    const title = 'Search results for '

    // Using custom hook.
    const { loading, gifs, setPage } = useGifs({ keyword });

    // To get the visibility of the component.
    const [elementRef, isVisible] = useElementOnScreen(
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        },
        false
    );

    // The function that allows to get the next page of gifs.
    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
        // console.log('Loading next page');
    };

    // Debounce!
    const debounceHandleNextPage = () => debounce(handleNextPage(), 1000);

    useEffect(() => {
        if (isVisible) debounceHandleNextPage();
    }, [isVisible]);

    /* If the gifs are being setting, show the loader. 
       In the other case, a list of gifs will be rendered.*/
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="App-Content-Title">
                        <h4>
                            {title}
                            <b>{searchKeyword}</b>:
                        </h4>
                    </div>
                    <div className="Gifs-Container">
                        <GifList gifs={gifs} />
                    </div>
                    <div ref={elementRef} className="Visor">
                        <Loader />
                    </div>
                </>
            )}
        </>
    );
}
