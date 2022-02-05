export default function getGifs({ keyword, limit = 50 }) {
    // Define the URL of the API request.
    let baseURL = `${process.env.REACT_APP_API_URL}`;

    // The final URL.
    let apiURL =
        baseURL +
        `${process.env.REACT_APP_API_KEY}&limit=${limit}&q=${keyword}`;

    // Return the promise.
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            // Get the data.
            const { data = [] } = response;

            // Validation data.
            if (Array.isArray(data)) {
                // Create an array with the data from the gifs.
                const gifs = data.map((gif) => {
                    const { images, title, id } = gif;
                    const { url } = images.downsized_medium;
                    return { title, id, url };
                });
                console.log(gifs)

                return gifs;
            }
        });
}
