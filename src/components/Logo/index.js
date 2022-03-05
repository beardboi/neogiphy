import logo from 'images/logo.png'

export default function Logo() {
    const headerTitle = 'dank giphy'

    return (
        <a href="/">
            <div className="App-Header">
                <img className="Logo" src={logo} alt="Logo" />
                <h1>{headerTitle}</h1>
            </div>
        </a>
    )
}
