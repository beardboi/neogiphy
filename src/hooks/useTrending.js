import { useEffect, useState } from 'react';
import getTrendings from 'services/getTrendings';

export default function useTrending() {
    const [loading, setLoading] = useState(false);
    const [trendings, setTrending] = useState([]);

    // The array with the trendings.
    const { data } = getTrendings();

    useEffect(
        function () {
            // Show loader.
            setLoading(true);

            // Get the trendings using a call to the API.
            getTrendings().then((trendings) => {
                setTrending(trendings);
                setLoading(false);
            });
        },
        [setTrending]
    );

    return { data };
}
