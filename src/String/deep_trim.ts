'use strict';

import { trim } from './trim.ts';

/**
 * Deletes all redundant spaces in the string.
 * @param content - Main string.
 * @returns {string}
 * @example
 * deepTrim("      Hello       friend.     "); // Hello friend.
 */
export const deepTrim = (content: string) => trim(content).replace(/\s{1,}/g, ' ');
