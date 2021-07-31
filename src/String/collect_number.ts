import { collectString } from './collect_string.ts';
import { slice } from './slice.ts';

/**
 * Collects numbers starting with ', " or `
 * @param content - Main string.
 * @param startIndex - Start index.
 * @returns {string}
 */
export const collectNumber = (content: string, startIndex?: number) => {
    let i = 0,
        end;
    const strings = collectString(content, startIndex);
    const numbers = '0123456789';
    let char = content[i];

    while (!numbers.includes(char)) {
        char = strings[++i];
    }

    end = i--;
    while (numbers.includes(char)) {
        char = strings[++end];
    }

    return Number(slice(strings, i, end));
};
