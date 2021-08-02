'use strict';

import { isString } from './is_string.ts';

/**
 * Deletes all redundant spaces in the string.
 * @param content - Main string.
 * @returns {string}
 * @example
 * deepTrim("      Hello       friend.     "); // Hello friend.
 */
export function deepTrim(content: string) {
    if (!isString(content))
        throw new TypeError(`${content}'s type is not string. type of ${content} = ${typeof content}`);

    return content.replace(/(^\s+)|(\s+$)/g, '')
        .replace(/\s{1,}/g, ' ');
}
