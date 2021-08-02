const findQuotes = (content: string, start = 0) => {
    let char = content[start];

    while (char !== '\'' && char !== '"' && char !== '`') {
        char = content[++start];
        if (start > content.length)
            return -1;
    }
    return start;
};

/**
 * Collects strings starting with ', " or `
 * @param content - Main string.
 * @param startIndex - Starting index.
 * @returns {string}
 */
export function collectString(content: string, startIndex?: number) {
    let res = '',
        i = findQuotes(content, startIndex),
        end = findQuotes(content, i + 1);

    if (end < i)
        throw new SyntaxError('Invalid or unexpected token');

    while (++i < end) {
        res += content[i];
    }

    return res;
}
