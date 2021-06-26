/* eslint-disable no-underscore-dangle */
export class StringUtils {
    public static strLengthRange(str: string, min?: number | null, max?: number | null): boolean {
        if (this.isString(str)) return false;
        if (min && !max) {
            return str.length >= min;
        }

        if (max && !min) {
            return str.length <= max;
        }

        if (min && max) {
            if (max < min) {
                throw new RangeError(`The maximum cannot be less than the minimum.(max = ${max}, min = ${min})`);
            }

            if (max === min) {
                throw new RangeError(`The maximum cannot be equal to the minimum.(max = ${max}, min = ${min})`);
            }

            return str.length >= min && str.length <= max;
        }

        return true;
    }

    public static title(str: string): string | null {
        if (typeof str !== "string") return null;
        return str.split(/\s+/g).map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ");
    }

    public static isString(target?: unknown): boolean {
        if (typeof target === "undefined") return false;
        if (typeof target === "string") return true;
        if (target instanceof String) return true;
        return false;
    }
}
