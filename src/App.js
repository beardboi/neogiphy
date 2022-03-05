import './App.css'
import { Route } from 'wouter'
import AppHeader from 'components/AppHeader'
import SearchResults from 'pages/Search'
import Details from 'pages/Details'
import LastSearch from 'components/LastSearch'
import { GifsContextProvider } from 'context/GifsContext'
import Trendings from 'components/Trendings'

/**
 * The principal component. It contains all the routes from the app.
 * @returns The App component.
 */
function App() {
    return (
        <>
            {/* APP HEADER */}
                <AppHeader />

            {/* APP CONTENT  */}
            <div className="App-Content">
                <Trendings />
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
