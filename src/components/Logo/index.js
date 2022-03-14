import './styles.css';

export default function Logo() {
    const headerTitle = 'Neogiphy';

    return (
        <a href="/">
            <div className="App-Header">
                <h1 className="Logo-Title Neon">{headerTitle}</h1>
            </div>
        </a>
    );
}
