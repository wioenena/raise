import { substring } from "./substring.ts";

export const endsWith = (content: string, search: string, endPosition?: number) => {
    "use strict";

    if (endPosition === undefined || endPosition > content.length)
        endPosition = content.length;

    return substring(content, endPosition - search.length, endPosition) === search;
};
