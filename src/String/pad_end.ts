'use strict';

import { padStart } from './pad_start.ts';

/**
 * The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
 * @param content - Main string.
 * @param maxLength - Max length
 * @param fillStr - The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).
 * @returns {string}
 */
export const padEnd = (content: string, maxLength: number, fillStr?: string) => content + padStart('', maxLength - content.length, fillStr);
