'use strict';

import checkIsString from './check_is_string.ts';

/**
 * Deletes all redundant spaces in the string.
 * @param content - Main string.
 * @returns {string}
 * @example
 * deepTrim("      Hello       friend.     "); // Hello friend.
 */
export default function deepTrim(content: string) {
    checkIsString(content);

    return content.replace(/(^\s+)|(\s+$)/g, '')
        .replace(/\s{1,}/g, ' ');
}
