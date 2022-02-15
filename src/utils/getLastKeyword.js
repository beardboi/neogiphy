export const getLastKeyword = (keyword) => {
    // Check if there is a keyword on the localStorage.
    const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')

    return keywordToUse
}
