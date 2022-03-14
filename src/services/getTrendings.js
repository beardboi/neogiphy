import { API_BASE_URL } from './config';

/**
 * It makes a call to the Giphy API to get the trending searches data.
 * @returns The array with the trending searches data.
 */
export default async function getTrendings() {
    // The parameters.
    const resource = 'trending';
    const action = 'searches';
    const limit = 50;

    // The final URL.
    const apiURL = `${API_BASE_URL}/${resource}/${action}?api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}`;

    // Fetch the data.
    const res = await fetch(apiURL);

    // Get the data.
    const response = await res.json();

    // Destructuring and return
    const { data = [] } = response;
    return data;
}
