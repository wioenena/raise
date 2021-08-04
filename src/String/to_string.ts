'use strict';

import isSymbol from '../Symbol/is_symbol.ts';

/**
 * Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved.
 * @param value - Value
 * @returns {string}
 */
export default function toString(value?: unknown): string {
    if (value === null || value === undefined)
        return '';

    if (value instanceof Array)
        return value.map((e) => toString(e)).join(',');

    if (isSymbol(value))
        return (value as Symbol).toString();

    const result = `${value}`;

    return result;
}
