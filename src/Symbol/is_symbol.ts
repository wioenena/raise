/**
 * Returns whether the target is "Symbol".
 * @param target - Targer
 * @returns {boolean}
 */
export default function isSymbol(target: unknown) {
    return typeof target === 'symbol';
}
