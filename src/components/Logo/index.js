import './styles.css';
import React from 'react'

const Logo = () => {
    const headerTitle = 'Neogiphy';

    return (
        <a href="/">
            <div className="App-Header">
                <h1 className="Logo-Title Neon">{headerTitle}</h1>
            </div>
        </a>
    );
}

export default React.memo(Logo);