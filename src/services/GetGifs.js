import { API_BASE_URL } from './config'

// TODO: Later, make a function reusable
export default async function getGifs({ keyword, limit = 25 }) {
    const baseURL = API_BASE_URL // Get the base URL.
    const resource = 'gifs'
    const action = 'search'

    // The final URL.
    let apiURL = `${baseURL}/${resource}/${action}?api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&q=${keyword}`

    // Fetch the data.
    const res = await fetch(apiURL)

    // Get the data.
    const response = await res.json()
    const { data } = response

    // Validation: data needs to be an array (that contains the gifs).
    if (Array.isArray(data)) {
        // For every gif in the data array.
        const gifs = data.map((gif) => {
            // Destructuring the gif object properties.
            const { id, title, images } = gif
            const { url } = images.downsized_medium

            // Finally, return the object to the gifs array.
            return { title, id, url }
        })

        return gifs // Finally, return the gifs.
    }

    return [] // Default return value
}
