import './styles.css';

/**
 * The Search Bar that allows to change the keyword.
 * @param {*} props The properties passed by the father component.
 * @returns The SearchBar Component.
 */
export default function SearchBar(props) {
    // Get the props by destructuring the props object.
    const { handleSubmit, text, keyword, handleInput } = props;

    return (
        <div className="Search-Container">
            <form onSubmit={handleSubmit} className="Input-Container">
                <i className="fas fa-search" />
                <input
                    type="text"
                    placeholder={text}
                    className="Search-Input"
                    value={keyword}
                    onChange={handleInput}
                />
                <button className="Search-Button">Search</button>
            </form>
        </div>
    );
}
