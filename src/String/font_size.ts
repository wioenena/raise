"use strict";

/**
 * The fontsize() method creates a <font> HTML element that causes a string to be displayed in the specified font size.
 * @param content - Main string.
 * @param size - Size
 * @returns {string}
 */
export const fontSize = (content: string, size: number) => `<font size="${size}">${content}</font>`;
