export default function getGifs(keyword, limit) {
    // Define the URL of the API request.
    let BASE_URL = `https://api.giphy.com/v1/gifs/search?
        api_key=${process.env.REACT_APP_API_KEY}
        &limit=${limit}
        &q=${keyword}`;

    // Return the promise.
    return fetch(BASE_URL)
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
                return gifs;
            }
        });
}
