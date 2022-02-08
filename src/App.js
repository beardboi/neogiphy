import './App.css';
import { Route } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/Search';

/**
 * The principal component of the App.
 * @returns The App mounted.
 */
function App() {
    return (
        <>
            {/* APP HEADER */}
            <Route component={Home} path="/" />
            <Route component={Home} path="/search/:keyword" />
            
            {/* MAIN CONTENT  */}
            <Route component={SearchResults} path="/search/:keyword" />
        </>
    );
}
export default App;
