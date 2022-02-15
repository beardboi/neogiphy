import { useState } from 'react/cjs/react.development'
import { useLocation } from 'wouter'
import logo from './../../images/logo.png'
import './styles.css'
import { description, headerTitle, searchText } from '../../config/const'
import SearchBar from '../SearchBar'

/**
 * The main component of the web page. It contains the web header
 * and the search input.
 * @returns The Home component.
 */
export default function AppHeader() {
    // Allows to manage the user web navigation.
    const pushLocation = useLocation()[1]

    // Handles the gifs keyword state.
    const [keyword, setKeyword] = useState('')

    /**
     * The function allows to to manage the user web navigation.
     * It push the app to the next route location.
     * @param {*} event The click event.
     */
    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    /**
     * This function handles changes made by the user to the search input.
     * @param {*} event The onChange event.
     */
    const handleInput = (event) => {
        // Change the keyword by the text input value of the textbox.
        setKeyword(event.target.value)
    }

    return (
        <>
            {/* App Header */}
            <a href="/">
                <div className="App-Header">
                    <img className="Logo" src={logo} alt="Logo" />
                    <h1>{headerTitle}</h1>
                </div>
            </a>
            <div className="Sub-Title-Container">
                <h3>{description}</h3>
            </div>
            <div className="Search-Container">
                <SearchBar
                    handleSubmit={handleSubmit}
                    handleInput={handleInput}
                    keyword={keyword}
                    text={searchText}
                />
            </div>
        </>
    )
}
