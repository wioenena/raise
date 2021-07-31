'use strict';

/**
 * Deletes spaces at the end of the string.
 * @param content - Main string.
 * @returns {string}
 * @example
 * trimEnd("abc    "); // abc
 */
export const trimEnd = (content: string) => content.replace(/\s+$/, '');
