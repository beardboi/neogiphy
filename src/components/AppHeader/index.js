import './styles.css';
import { useLocation } from 'wouter';
import AppDescription from 'components/AppDescription';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import { useCallback } from 'react';

/**
 * The main component of the web page. It contains the header of
 * @returns The Home component.
 */
export default function AppHeader() {
    // Allows to manage the user web navigation.
    const pushLocation = useLocation()[1];

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`);
    }, [pushLocation]);

    return (
        <div className="App-Header-Container">
            <Logo />
            <AppDescription />
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}
