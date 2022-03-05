import './styles.css'
import { useLocation } from 'wouter'
import { useState } from 'react/cjs/react.development'
import SearchBar from 'components/SearchBar'
import Logo from 'components/Logo'
import AppDescription from 'components/AppDescription'

/**
 * The main component of the web page. It contains the web header
 * and the search input.
 * @returns The Home component.
 */
export default function AppHeader() {
    // Add some style to the formula.
    const searchText = 'Search a gif by some keyword...'

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
        <div className="App-Header-Container">
            {/* App Header */}
            <Logo />
            <AppDescription />
            <SearchBar
                handleSubmit={handleSubmit}
                handleInput={handleInput}
                keyword={keyword}
                text={searchText}
            />
        </div>
    )
}
