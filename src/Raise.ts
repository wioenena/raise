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
}
