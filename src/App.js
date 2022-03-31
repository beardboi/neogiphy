import './App.css';
import { GifsContextProvider } from 'context/GifsContext';
import { Route } from 'wouter';
import { Suspense } from 'react';
import AppHeader from 'components/AppHeader';
import React from 'react';
import Trendings from 'components/Trendings';

const LastSearch = React.lazy(() => import('components/LastSearch'));
const SearchResults = React.lazy(() => import('pages/Search'));
const Details = React.lazy(() => import('pages/Details'));

/**
 * The principal component. It contains all the routes from the app.
 * @returns The App component.
 */
function App() {
    return (
        <Suspense fallback={null}>
            {/* App header */}
            <AppHeader />
            {/* App content */}
            <div className="App-Content">
                <div>
                    <GifsContextProvider>
                        {/* The differents routes of the app.*/}
                        <Route component={LastSearch} path="/" />
                        <Route
                            component={SearchResults}
                            path="/search/:keyword"
                        />
                        <Route component={Details} path="/gif/:id" />
                    </GifsContextProvider>
                </div>
                <div>
                    <Trendings />
                </div>
            </div>
        </Suspense>
    );
}
export default App;
