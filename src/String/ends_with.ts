import { substring } from "./substring.ts";

/**
 * The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
 * @param content - Main string.
 * @param search - Search string.
 * @param endPosition - End position.
 * @returns {string}
 */
export const endsWith = (content: string, search: string, endPosition?: number) => {
    "use strict";

    if (endPosition === undefined || endPosition > content.length)
        endPosition = content.length;

    return substring(content, endPosition - search.length, endPosition) === search;
};
