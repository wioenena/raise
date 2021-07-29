"use strict";

/**
 * The fontcolor() method creates a <font> HTML element that causes a string to be displayed in the specified font color.
 * @param content - Main string.
 * @param color - Color
 * @returns {string}
 */
export const fontColor = (content: string, color: string) => `<font color="${color}">${content}</font>`;
