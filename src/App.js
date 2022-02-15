import './App.css'
import { Route } from 'wouter'
import AppHeader from './components/AppHeader'
import SearchResults from './pages/Search'
import Details from './pages/Details'
import LastSearch from './components/LastSearch'
import { GifsContextProvider } from './context/GifsContext'

/**
 * The principal component. It contains all the routes from the app.
 * @returns The App component.
 */
function App() {
    return (
        <>
            {/* APP HEADER */}
            <div className="App-Header-Container">
                <AppHeader />
            </div>
            {/* APP CONTENT  */}
            <div className="App-Content">
                <GifsContextProvider>
                    <Route component={LastSearch} path="/" />
                    <Route component={SearchResults} path="/search/:keyword" />
                    <Route component={Details} path="/gif/:id" />
                </GifsContextProvider>
            </div>
        </>
    )
}
export default App
