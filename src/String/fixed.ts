'use strict';

import { tag } from './tag.ts';

/**
 * The fixed() method creates a <tt> HTML element that causes a string to be displayed in fixed-pitch font.
 * @param content - Main string.
 * @returns {string}
 */
export const fixed = (content: string) => tag('tt', content);
