import './App.css';
import { Route } from 'wouter';
import GifList from './components/GifList/index';

/**
 * The principal component of the App.
 *
 * @returns The App mounted.
 */
function App() {
    const headerTitle = 'GIFS SEARCHER </>';
    const description = 'A simple react gifs searcher';

    return (
        <>
            {/* APP HEADER */}
            <div className="App-Header-Container">
                <div className="App-Header">
                    <h1>{headerTitle}</h1>
                </div>
                <div className="Sub-Title-Container">
                    <h4>{description}</h4>
                </div>
                <div className="Input-Container">
                    <input
                        type="text"
                        placeholder="Write a keyword..."
                        className="Search-Input"
                    />
                    <button className="Search-Button">Search</button>
                </div>
            </div>
            {/* MAIN CONTENT  */}
            <div className="App-Content">
                <Route component={GifList} path="/gif/:keyword"></Route>
            </div>
        </>
    );
}

export default App;
