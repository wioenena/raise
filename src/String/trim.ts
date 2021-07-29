export const trim = (content: string) => {
    "use strict";

    return content
        .replace(/^\s+|\s+$/g, "")
        .replace(/\s{1,}/g, " ");
};
