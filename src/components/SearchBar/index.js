import { useState } from 'react';
import './styles.css';

/**
 * The Search Bar that allows to change the keyword.
 * @param {*} props The properties passed by the father component.
 * @returns The SearchBar Component.
 */
export default function SearchBar({ onSubmit }) {
    const text = 'Search a gif by some keyword...';

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
        onSubmit({ keyword });
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
        <div className="Search-Container">
            <form onSubmit={handleSubmit} className="Input-Container">
                <i className="fas fa-search" />
                <input
                    type="text"
                    placeholder={text}
                    className="Search-Input"
                    value={keyword}
                    onChange={handleInput}
                />
                <button className="Search-Button">Search</button>
            </form>
        </div>
    );
}
