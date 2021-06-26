/* eslint-disable no-underscore-dangle */
export class StringUtils {
    public static strLengthRange(str: string, min?: number | null, max?: number | null): boolean {
        if (!this.isString(str)) return false;
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

    public static isFullString(str: string): boolean {
        if (!this.isString(str)) return false;
        if (str === "" || str === " ") return false;
        return true;
    }

    public static isCamelCase(str: string): boolean {
        if (!this.isString(str)) return false;
        if (str.match(/[A-Z]+/g)) return false;
        return true;
    }

    public static isUrl(str: string) {
        if (!this.isString(str)) return false;
        const reg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
        const matched = str.match(reg);
        if (matched !== null && matched instanceof Array && Array.isArray(matched)) return true;
        return false;
    }
}
