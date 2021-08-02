'use strict';

import isSymbol from '../Symbol/is_symbol.ts';

/**
 *
 * @param value - Value
 * @returns {string}
 */
export default function toString(value?: unknown): any {
    if (value === null || value === undefined)
        return '';

    if (value instanceof Array)
        return value.map((e) => toString(e)).join(',');

    if (isSymbol(value))
        return (value as Symbol).toString();

    const result = `${value}`;

    return result;
}
