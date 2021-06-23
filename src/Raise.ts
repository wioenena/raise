/**
 *
 * The base class.
 * @export
 * @class Raise
 */
export class Raise {
    /**
     *
     * Creates a list of numbers between specified ranges.
     * @static
     * @param {number} [min=0]
     * @param {number} [max=10]
     * @returns {number[]}
     * @memberof Raise
     */
    public static range(min: number = 0, max: number = 10): number[] {
        const result: number[] = new Array(0);

        for (let i = min; i <= max; i++) {
            result.push(i);
        }

        return result;
    }

    /**
     *
     * Returns whether the value is 'Promise'.
     * @static
     * @param {unknown} [target]
     * @returns {boolean}
     * @memberof Raise
     */
    public static isPromise(target?: unknown): boolean {
        const typePromise = target as Promise<unknown>;

        if (typeof target !== "function" && !(target instanceof Promise))
            return false;

        if (
            (
                target instanceof Promise ||
                (
                    typeof typePromise.then === "function" &&
                    typeof typePromise.catch === "function" &&
                    typeof typePromise.finally === "function"
                )
            ) ||
            (
                Object.prototype.toString.call(typePromise) === "[object Promise]" ||
                Object.prototype.toString.call(typePromise) === "[object AsyncFunction]"
            )
        ) return true;

        return false;
    }

    /**
     *
     * Returns the keys found in the main object that are not found in the target object.
     * @static
     * @param {object} base
     * @param {object} target
     * @returns {string[]}
     * @memberof Raise
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
