import './styles.css';
import { useLocation } from 'wouter';
import { useState } from 'react/cjs/react.development';
import AppDescription from 'components/AppDescription';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';

/**
 * The main component of the web page. It contains the header of
 * @returns The Home component.
 */
export default function AppHeader() {
    // Add some style to the formula.
    const searchText = 'Search a gif by some keyword...';

    // Allows to manage the user web navigation.
    const pushLocation = useLocation()[1];

    // Handles the gifs keyword state.
    const [keyword, setKeyword] = useState('');

    /**
     * The function allows to to manage the user web navigation.
     * It push the app to the next route location.
     * @param {*} event The click event.
     */
    const handleSubmit = (event) => {
        // Prevent the default behaviour.
        // Then redirect the user to the search based on the input keyword.
        event.preventDefault();
        pushLocation(`/search/${keyword}`);
    };

    /**
     * This function handles changes made by the user to the search input.
     * @param {*} event The onChange event.
     */
    const handleInput = (event) => {
        // Change the keyword based on the input made by the user.
        // It is call everything that the user change the input.
        setKeyword(event.target.value);
    };

    return (
        <div className="App-Header-Container">
            <Logo />
            <AppDescription />
            <SearchBar
                handleSubmit={handleSubmit}
                handleInput={handleInput}
                keyword={keyword}
                text={searchText}
            />
        </div>
    );
}
