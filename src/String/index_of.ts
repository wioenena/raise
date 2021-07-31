/**
 * The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 * @param content - Main string.
 * @param search - Search string.
 * @param startPosition - Start position.
 * @returns {number}
 */
export const indexOf = (content: string, search: string, startPosition?: number) => {
    if (startPosition === undefined || startPosition > content.length)
        startPosition = 0;

    while (startPosition < content.length) {
        if (content[startPosition] === search[0]) {
            if (search.length === 0)
                return startPosition;

            let i = startPosition,
                str = '';

            while (i < content.length) {
                str += content[i++];
                if (str === search)
                    return startPosition;
            }
        }

        startPosition++;
    }

    return -1;
};
