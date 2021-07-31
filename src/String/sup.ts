'use strict';

import { tag } from './tag.ts';

/**
 * The sup() method creates a <sup> HTML element that causes a string to be displayed as superscript.
 * @param content - Main string.
 * @returns {string}
 */
export const sup = (content: string) => tag('sup', content);
