'use strict';

/**
 * Deletes spaces at the start of the string.
 * @param content - Main string.
 * @returns {string}
 * @example
 * trimStart("   abc"); // abc
 */
export const trimStart = (content: string) => content.replace(/^\s+/, '');
