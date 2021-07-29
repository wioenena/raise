/**
 * The substring function returns a part of a given string.
 * @param content - Main string.
 * @param start - start index.
 * @param end - end index.
 * @returns {string}
 * @example
 * substring("This a substring method.", 7); // substring method.
 */
export const substring = (content: string, start: number, end?: number) => {
    "use strict";

    let str = "";

    if (end === undefined || end > content.length)
        end = content.length;

    [start, end] = end < start ? [end, start] : [start, end];

    while (start < end) {
        str += content[start];
        start++;
    }

    return str;
};
