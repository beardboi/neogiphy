import { useState } from 'react/cjs/react.development';
import { useLocation } from 'wouter';
import logo from './../../images/logo.png';

/**
 * The main component of the web page. It contains the web header 
 * and the search input.
 * @returns The Home component.
 */
export default function Home() {
    // Some style to the formula 😎.
    const emoji = '💻';
    const headerTitle = 'DANK GIPHY';
    const description = `A simple gif searcher write on React ${emoji}`;
    const searchText = 'Search a gif by some keyword...';

    // Allows to manage the user web navigation.
    const [path, pushLocation] = useLocation();

    // Handles the gifs keyword state.
    const [keyword, setKeyword] = useState('');

    /**
     * The function allows to to manage the user web navigation.
     * It push the app to the next route location.
     * @param {*} event The click event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(path);
        pushLocation(`/search/${keyword}`);
    };

    /**
     * This function handles changes made by the user to the search input.
     * @param {*} event The onChange event.
     */
    const handleInput = (event) => {
        // Change the keyword by the text input value of the textbox.
        setKeyword(event.target.value);
    };

    return (
        <>
            <div className="App-Header-Container">
                <a href="/">
                    <div className="App-Header Neons flex flex-row shadow-sm">
                        <img className="Logo" src={logo} alt="Logo" />
                        <h1>{headerTitle}</h1>
                    </div>
                </a>
                <div className="Sub-Title-Container">
                    <h4>{description}</h4>
                </div>
                <div className="Search-Container">
                    <form onSubmit={handleSubmit} className="Input-Container">
                        <i className="fas fa-search" />
                        <input
                            type="text"
                            placeholder={searchText}
                            className="Search-Input"
                            value={keyword}
                            onChange={handleInput}
                        />
                        <button type="submit" className="Search-Button">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
