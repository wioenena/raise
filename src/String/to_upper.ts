'use strict';

import toString from './to_string.ts';

/**
 * Converts string, as a whole, to upper case just like String#toUpperCase.
 * @param {string} str - The string to convert.
 * @returns {string}
 * @example
 * toUpper("abc"); // ABC
 */
export default function toUpper(str: string): string {
    return toString(str).toUpperCase();
}
