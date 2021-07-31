'use strict';

/**
 * The concat() method concatenates the string arguments to the calling string and returns a new string.
 * @param content - Main string.
 * @param others - Other strings.
 * @returns {string}
 */
export const concat = (content: string, ...others: string[]) => content + others.join('');
