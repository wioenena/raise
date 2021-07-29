/**
 * The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 * @param content - Main string.
 * @param search - Search string.
 * @param startPosition - Start position.
 * @returns {number}
 */
export const indexOf = (content: string, search: string, startPosition?: number) => {
    if (startPosition === undefined || startPosition > search.length)
        startPosition = 0;

    while (startPosition < content.length) {
        if (content[startPosition++] === search)
            return startPosition - 1;
    }

    return -1;
};
