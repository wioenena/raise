import { slice } from "./slice.ts";

/**
 * The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
 * @param content - Main string.
 * @param start - Start index.
 * @param length - Optional. The number of characters to extract.
 * @returns {string}
 */
export const substr = (content: string, start: number, length?: number) => {
    "use strict";

    if (start < 1 && length === undefined)
        return content;

    if (start > -1 && length === undefined)
        return slice(content, start, content.length);

    if (length === undefined)
        length = content.length;

    if (length < 0)
        return "";

    if (start > -1)
        return slice(content, start, ++length);

    start = content.length - (start * -1);
    return slice(content, start, length);
};
