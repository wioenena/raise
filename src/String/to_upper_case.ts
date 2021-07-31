import { slice } from './slice.ts';

/**
 * Same as "String.prototype.toUpperCase", only start and end indexes can be set.
 * @param content - Main string.
 * @param start - Start position.
 * @param end - End position.
 * @returns {string}
 */
export const toUpperCase = (content: string, start?: number, end?: number) => {
    'use strict';

    if (start === undefined && end === undefined)
        return content.toUpperCase();

    if (start === undefined || start > content.length || start < 0)
        start = 0;

    if (end === undefined || end > content.length || end < 0)
        end = content.length;

    if (start > end)
        [start, end] = [end, start];

    return slice(content, 0, start) + slice(content, start, end + 1).toUpperCase() + slice(content, end + 1, content.length);
};