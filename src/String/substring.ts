export const substring = (content: string, start: number, end?: number) => {
    "use strict";

    let str = "";

    end = +end!;

    // eslint-disable-next-line no-self-compare
    if (end !== end)
        end = content.length;

    // eslint-disable-next-line no-multi-assign
    end = Math.min(end, content.length);

    [start, end] = end < start ? [end, start] : [start, end];

    while (start < end) {
        str += content[start];
        start++;
    }

    return str;
};
