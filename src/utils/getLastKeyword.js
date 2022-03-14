export const getLastKeyword = (keyword) => {
    // Check if there is a keyword on the localStorage.
    // And then return it.
    const keywordToUse = keyword
        ? keyword
        : localStorage.getItem('lastKeyword');
    return keywordToUse;
};
