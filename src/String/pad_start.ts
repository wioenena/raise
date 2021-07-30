import { append } from "./append.ts";

/**
 * The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
 * @param content - Main string.
 * @param maxLength - Max length.
 * @param fillStr - The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is " " (U+0020 'SPACE').
 * @returns {string}
 */
export const padStart = (content: string, maxLength: number, fillStr?: string) => {
    "use strict";

    let str = "";

    for (let i = 0; i < (maxLength - content.length); i++)
        str += append("", fillStr || " ", 0);

    return str + content;
};
