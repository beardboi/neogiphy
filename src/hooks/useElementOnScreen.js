import { useEffect, useState, useRef } from 'react';

/**
 * This custom hook allows to get the visibility state of an element.
 * @param {*} options The options parameter for the observer.
 */
export default function useElementOnScreen(options, once = true) {
    // The reference element.
    const elementRef = useRef(null);
    // The state of the visibility of the ref element.
    const [isVisible, setIsVisible] = useState(false);

    // Define the callback function.
    const callBackFunction = (entries, observer) => {
        const [entry] = entries; // Get the entry.
        console.log(entry);
        if (entry.isIntersecting) {
            setIsVisible(true);
            once && observer.disconnect();
        } else {
            !once && setIsVisible(false);
        }
    };

    useEffect(() => {
        // Create the observer.
        const observer = new IntersectionObserver(callBackFunction, options);
        let observerRefValue = null;

        // Check if the element is not null and then start to observe the element.
        if (elementRef.current) {
            observer.observe(elementRef.current);
            observerRefValue = elementRef.current;
        }

        // In case that the component is being unmounted.
        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    }, [elementRef, options]); // Effect dependencies.

    return [elementRef, isVisible];
}
