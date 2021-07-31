'use strict';

import { tag } from './tag.ts';

/**
 * The blink() method creates a <blink> HTML element that causes a string to blink.
 * @param content - Main string.
 * @returns {string}
 */
export const blink = (content: string) => tag('blink', content);
