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
        const targetKeys: string[] = this.objectDeepKeys(target);
        return this.objectDeepKeys(base).filter((k) => !targetKeys.includes(k));
    }

    public static objectDeepKeys(o: object): string[] {
        const result: string[] = [];

        result.push(...Object.getOwnPropertyNames(o));

        if ("constructor" in o) {
            result.push(...Object.getOwnPropertyNames(Object.getPrototypeOf(o)));
        }

        return result;
    }
}
