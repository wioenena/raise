import { indexOf } from "./index_of.ts";

/**
 * The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
 * @param content - Main string.
 * @param search - Search string.
 * @param startPosition - Start position.
 * @returns {boolean}
 */
export const includes = (content: string, search: string, startPosition?: number) => {
    "use strict";

    if (startPosition === undefined || startPosition > content.length)
        startPosition = 0;

    return indexOf(content, search, startPosition) > -1;
};
