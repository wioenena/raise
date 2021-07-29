import { substring } from "./substring.ts";

const getBaseLog = (x: number, y: number) => Math.log(x) / Math.log(y);

/**
 * The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
 * @param content - Main string.
 * @param count - An integer between 0 and +Infinity, indicating the number of times to repeat the string.
 * @returns {string}
 * @example
 * repeat("abc", 3); // abcabcabc
 */
export const repeat = (content: string, count: number) => {
    "use strict";

    // eslint-disable-next-line prefer-template
    let str = "" + content;

    if (count < 0)
        throw new Error("Repeat count must be non-negative.");

    if (count === Infinity || count === Infinity)
        throw new Error("Repeat count must be less than infinity.");

    count = Math.floor(count);

    if (str.length < 1 || count === 0)
        return "";

    if (str.length * count >= (2 ** 28))
        throw new Error("The number of repetitions should not exceed the maximum number of strings.");

    const maxCount = str.length * count;

    count = Math.floor(getBaseLog(count, 2));

    while (count) {
        str += str;
        count--;
    }

    str += substring(str, 0, maxCount - str.length);

    return str;
};
