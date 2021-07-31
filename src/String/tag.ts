'use strict';

/**
 * Returns the string with the specified tag.
 * @param tag - The tag.
 * @param content - Main string.
 * @returns {string}
 */
export const tag = (tag: string, content: string) => `<${tag}>${content}</${tag}>`;
