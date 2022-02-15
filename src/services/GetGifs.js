import { API_URL } from './config'

export default async function getGifs({ keyword, limit = 50 }) {
    // Define the URL of the API request.
    let baseURL = API_URL

    // The final URL.
    let apiURL =
        baseURL +
        `?api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&q=${keyword}`

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
