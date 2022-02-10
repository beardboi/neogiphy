import './App.css';
import { Route } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/Search';
import Details from './pages/Details';

/**
 * The principal component. It contains all the routes from the app.
 * @returns The App component.
 */
function App() {
    return (
        <>
            {/* APP HEADER */}
            <Route component={Home} path="/" />
            <Route component={Home} path="/search/:keyword" />
            <Route component={Home} path="/gif/:id" />

            {/* MAIN CONTENT  */}
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Details} path="/gif/:id" />
        </>
    );
}
export default App;
