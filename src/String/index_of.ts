/**
 * The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 * @param content - Main string.
 * @param search - Search string.
 * @param startPosition - Start position.
 * @returns {number}
 */
export const indexOf = (content: string, search: string, startPosition?: number) => {
    let i = startPosition || 0,
        char = content[i],
        str = '';

    if (char === search)
        return i;

    while (i < content.length) {
        char = content[i++];
        str = '';

        if (char === search && search.length === 1)
            return i;

        let j = i;
        while (j < content.length) {
            char = content[j++];
            str += char;
            if (str === search)
                return i;
        }
    }

    return -1;
};
