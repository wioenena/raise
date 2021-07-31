'use strict';

import { tag } from './tag.ts';
import { append } from './append.ts';

/**
 * The link() method creates a string representing the code for an <a> HTML element to be used as a hypertext link to another URL.
 * @param content - Main string.
 * @param url - Url
 * @returns {string}
 */
export const link = (content: string, url: string) => append(tag('a', content), ` href="${url}"`, 2);
