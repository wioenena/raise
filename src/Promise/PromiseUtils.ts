export class PromiseUtils {
    /**
     *
     * Returns whether the value is 'Promise'.
     * @static
     * @param {unknown} [target]
     * @returns {boolean}
     * @memberof FunctionUtil
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
}
