export const append = (content: string, word: string, index: number) => {
    "use strict";

    const { length } = content;
    if (index >= length) content += word;
    else if (index < 1) content = word + content;

    return content;
};
