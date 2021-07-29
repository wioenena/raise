/**
 * The substring function returns a part of a given string.
 * @param content - Main string.
 * @param start - start index.
 * @param end - end index.
 * @returns {string}
 * @example
 * substring("This a substring method.",7); // -> substring method.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/substring}
 */
export const substring = (content: string, start: number, end?: number) => {
    "use strict";

    let str = "";

    end = typeof end === "undefined" ? content.length : Math.min(end, content.length);

    [start, end] = end < start ? [end, start] : [start, end];

    while (start < end) {
        str += content[start];
        start++;
    }

    return str;
};
