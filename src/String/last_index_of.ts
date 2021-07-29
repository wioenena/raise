import { indexOf } from "./index_of.ts";

export const lastIndexOf = (content: string, search: string, endPosition?: number) => {
    "use strict";

    if (endPosition === undefined || endPosition > content.length)
        endPosition = content.length;

    while (endPosition > -1) {
        if (content[endPosition] === search[0]) {
            if (search.length === 1)
                return endPosition;

            let i = endPosition,
                str = "";
            while (i < content.length) {
                str += content[i++];
                if (str === search)
                    return endPosition;
            }
        }

        endPosition--;
    }

    return -1;
};
