"use strict";

/**
 *
 * @param content - Main string.
 * @returns {string}
 * @example
 * trim("   abc   "); // abc
 */
export const trim = (content: string) => {
    "use strict";

    return content
        .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
