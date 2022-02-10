/**
 * The page that shows the detail of a gif given its id.
 * @param {*} params The object that contains the params. 
 * @returns The Details component.
 */
export default function Details({ params }) {
    // Debug
    console.log(params);

    const { id } = params;

    return <div className="App-Content"></div>;
}
