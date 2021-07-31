'use strict';

import { tag } from './tag.ts';

/**
 * The strike() method creates a <strike> HTML element that causes a string to be displayed as struck-out text.
 * @param content - Main string.
 * @returns {string}
 */
export const strike = (content: string) => tag('strike', content);
