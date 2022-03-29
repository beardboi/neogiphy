import { API_BASE_URL } from './config';

/**
 * This function takes the data obtained from the call to the API and process it
 * to finally return an array with the gif's content data.
 * @param {*} response The response from the call to an API.
 * @returns The array with the response data.
 */
const processData = (response) => {
    const { data } = response;

    console.log(data);

    // Validation: data needs to be an array (that contains the gifs).
    if (Array.isArray(data)) {
        // For every gif in the data array.
        const gifs = data.map((gif) => {
            // Destructuring the gif object properties.
            const { id, title, images } = gif;
            const { url } = images.downsized_medium;

            // Finally, return the object to the gifs array.
            return { title, id, url };
        });

        return gifs; // Finally, return the gifs.
    }

    return []; // Default return value
};

/**
 *
 * @param {*} param0
 */
export default async function getGifs({ keyword, limit = 25, page = 0 }) {
    const baseURL = API_BASE_URL; // Get the base URL.
    const offSet = limit * page; // How many results skip (helps to paginate the data).

    // The final URL.
    let apiURL = `${baseURL}/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&q=${keyword}&offset=${offSet}`;

    // Fetch the data.
    const res = await fetch(apiURL);

    // Get the data.
    const response = await res.json();

    return processData(response);
}
