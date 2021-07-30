/**
 * The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
 * @param content - Main string.
 * @param start - Start index.
 * @param end - End index.
 * @returns {string}
 */
export const slice = (content: string, start?: number, end?: number) => {
    "use strict";

    if (start === undefined && end === undefined)
        return content;

    let str = "";

    if (start === undefined)
        start = 0;

    if (end === undefined)
        end = content.length;

    if (start < 0)
        if (start * -1 > content.length)
            start = 0;
        else
            start = content.length - (start * -1);

    if (end < 0)
        if (end * -1 > content.length)
            end = 0;
        else
            end = content.length - (end * -1);

    while (start < end)
        str += content[start++];

    return str;
};
