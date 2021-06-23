/**
 *
 * The utility functions for Objects.
 * @export
 * @class ObjectUtil
 */
export class ObjectUtils {
    /**
     *
     * Returns the keys found in the main object that are not found in the target object.
     * @static
     * @param {object} base
     * @param {object} target
     * @returns {string[]}
     * @memberof ObjectUtil
     */
    public static objectDifferenceKeys(base: object, target: object): string[] {
        const targetKeys: string[] = [
            ...Object.getOwnPropertyNames(target),
            ...Object.getOwnPropertyNames(Object.getPrototypeOf(target))
        ];
        return [
            ...Object.getOwnPropertyNames(base),
            ...Object.getOwnPropertyNames(Object.getPrototypeOf(base))
        ].filter((k) => !targetKeys.includes(k));
    }
}
