'use strict';

/**
 * Returns whether the target's type is string.
 * @param target - Target.
 * @returns {boolean}
 */
export default function isString(target: unknown) {
    return typeof target === 'string';
}
