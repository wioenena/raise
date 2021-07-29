export const trim = (content: string) => {
    "use strict";

    return content
        .replace(/^\s+|\s+$/g, "");
};
