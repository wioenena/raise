'use strict';

/**
 * Deletes all redundant spaces in the string.
 * @param content - The string to be converted to a non-space string.
 * @returns {string}
 * @example
 * deepTrim("      Hello       friend.     "); // Hello friend.
 */
export default function deepTrim(content: string): string {
    return content.replace(/(^\s+)|(\s+$)/g, '')
        .replace(/\s{1,}/g, ' ');
}
