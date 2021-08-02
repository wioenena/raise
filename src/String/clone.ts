'use strict';

import checkIsString from './check_is_string.ts';

/**
 * Copies the string.
 * @param content - Main string.
 * @returns {string}
 * @example
 * clone("Hello"); // Hello
 */
export default function clone(content: string) {
    checkIsString(content);

    return `${content}`;
}
