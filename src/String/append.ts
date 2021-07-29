import { substring } from "./substring.ts";

/**
 * Appends to the beginning, end, or specified index of the string.
 * @param content - Main string.
 * @param word - String to append.
 * @param index - The index to add.
 * @returns {string}
 * @example
 * append("How", " are you ?"); // How are you ?
 */
export const append = (content: string, word: string, index?: number) => {
    "use strict";

    index = index === undefined || index > content.length ? content.length : index;

    const { length } = content;
    if (index >= length) return content + word;
    if (index < 1) return word + content;

    return substring(content, 0, index) + word + substring(content, index);
};
