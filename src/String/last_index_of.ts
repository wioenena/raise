import { indexOf } from './index_of.ts';

/**
 * The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
 * @param content - Main string.
 * @param search - Search string.
 * @param endPosition - End position.
 * @returns {string}
 */
export const lastIndexOf = (content: string, search: string, endPosition?: number) => {
    'use strict';

    if (endPosition === undefined || endPosition > content.length)
        endPosition = content.length;

    while (endPosition > -1) {
        if (content[endPosition] === search[0]) {
            if (search.length === 1)
                return endPosition;

            return indexOf(content, search, endPosition);
        }

        endPosition--;
    }

    return -1;
};
