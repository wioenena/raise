import { substring } from './substring.ts';

/**
 * The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
 * @param content - Main string.
 * @param search - Search string.
 * @param startPosition - Start position.
 * @returns {string}
 */
export const startsWith = (content: string, search: string, startPosition?: number) => {
    'use strict';

    if (startPosition === undefined || startPosition > content.length)
        startPosition = 0;

    return substring(content, startPosition, startPosition + search.length) === search;
};
