'use strict';

import isString from './is_string.ts';

export default function checkIsString(content: unknown) {
    if (!isString(content))
        throw new TypeError(`${content}'s type is not string. type of ${content} = ${typeof content}`);
}
