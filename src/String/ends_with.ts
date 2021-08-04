'use strict';

/**
 * Checks if string ends with the given target string.
 * @param {string} str - Main string.
 * @param {string} target - Target char(s).
 * @param {number} position - End position.
 * @returns {boolean}
 * @example
 * endsWith("abc", "b");
 */
export default function endsWith(str: string, target: string, position?: number): boolean {
    const { length } = str;

    position = position === undefined ? length : +position;

    if (position < 0 || position !== position)
        position = 0;
    else if (position > length)
        position = length;

    return str.slice(position - target.length, position) === target;
}
