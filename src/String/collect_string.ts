/**
 * Collects strings starting with ', " or `
 * @param content - Main string.
 * @param startIndex - Starting index.
 * @returns {string}
 */
export const collectString = (content: string, startIndex?: number) => {
    let i = startIndex || 0,
        str = '',
        char = content[i],
        start = false;

    while (char !== '\'' && char !== '"' && char !== '`') {
        char = content[++i];
    }

    start = true;

    while (start) {
        char = content[++i];
        if (char === '\'' || char === '"' || char === '`')
            break;
        else if (i >= content.length)
            throw new SyntaxError('Invalid or unexpected token');

        str += char;
    }

    return str;
};
