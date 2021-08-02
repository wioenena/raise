import { collectString } from './collect_string.ts';

/**
 * Collects numbers starting with ', " or `
 * @param content - Main string.
 * @param startIndex - Start index.
 * @returns {string}
 */
export const collectNumber = (content: string, startIndex?: number) => {
    const strings = collectString(content, startIndex);
    let res = '',
        i = 0,
        char = strings[i],
        num = +char;

    while (num !== num && char !== ' ' && char !== '') {
        if (i > content.length)
            break;

        char = strings[i++];
        num = +char;
    }

    while (i < content.length) {
        char = strings[i++];
        num = +char;

        if (num !== num || char === ' ' || char === '')
            break;

        res += num;
    }

    return +res;
};
