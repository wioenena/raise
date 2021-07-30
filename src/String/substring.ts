import { slice } from "./slice.ts";

/**
 * The substring function returns a part of a given string.
 * @param content - Main string.
 * @param start - Start index.
 * @param end - End index.
 * @returns {string}
 * @example
 * substring("This a substring method.", 7); // substring method.
 */
export const substring = (content: string, start?: number, end?: number) => {
    "use strict";

    if (start === undefined && end === undefined)
        return content;

    if (start === undefined || start < 0 || start > content.length)
        start = 0;

    if (end === undefined || end > content.length || end < 0)
        end = 0;

    if (start > end)
        [start, end] = [end, start];

    return slice(content, start, end);
};
