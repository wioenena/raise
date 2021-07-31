'use strict';

import { tag } from './tag.ts';
import { append } from './append.ts';

/**
 * The fontcolor() method creates a <font> HTML element that causes a string to be displayed in the specified font color.
 * @param content - Main string.
 * @param color - Color
 * @returns {string}
 */
export const fontColor = (content: string, color: string) => append(tag('font', content), ` color="${color}"`, 5);
