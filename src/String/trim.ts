'use strict';

/**
 * The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
 * @param content - Main string.
 * @returns {string}
 * @example
 * trim("   abc   "); // abc
 */
export const trim = (content: string) => {
    'use strict';

    return content
        .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
