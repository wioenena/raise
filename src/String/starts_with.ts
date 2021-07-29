import { substring } from "./substring.ts";

export const startsWith = (content: string, search: string, startPosition?: number) => {
    "use strict";

    if (startPosition === undefined || startPosition > content.length)
        startPosition = 0;

    return substring(content, startPosition, startPosition + search.length) === search;
};
