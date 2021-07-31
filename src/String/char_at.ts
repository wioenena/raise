'use strict';

/**
 * The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
 * @param content - Main string.
 * @param index - The index.
 * @returns {string}
 */
export const charAt = (content: string, index: number) => String.prototype.charAt.call(content, index);
