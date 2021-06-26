/* eslint-disable no-underscore-dangle */
import { RaiseTypeError } from "../Errors/TypeError.ts";
import { Mixed } from "../../deps.ts";

export class StringUtils {
    public static strLengthRange(str: string, min?: number | null, max?: number | null): boolean {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
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

    public static title(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        return str.split(/\s+/g).map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ");
    }

    public static isString(target?: unknown): boolean {
        if (typeof target === "string") return true;
        if (target instanceof String) return true;
        return false;
    }

    public static isFullString(str: string): boolean {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        if (str === "" || str === " ") return false;
        return true;
    }

    public static isCamelCase(str: string): boolean {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        if (str.match(/[A-Z]+/g) && !str.includes("_") && str[0] !== str[0].toUpperCase()) return true;
        return false;
    }

    public static isLowerCase(str: string): boolean {
        if (!this.isString(str)) return false;
        if (this.isSnakeCase(str)) return false;
        if (this.isCamelCase(str)) return false;
        return !(str === "" || str === "");
    }

    public static isUrl(str: string) {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        const reg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
        const matched = str.match(reg);
        if (matched !== null && matched instanceof Array && Array.isArray(matched)) return true;
        return false;
    }

    public static isEmail(str: string): boolean {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        const reg = /\S+@\S+\.\S+/g;
        const matched = str.match(reg);
        if (matched !== null && matched instanceof Array && Array.isArray(matched)) return true;
        return false;
    }

    public static isSnakeCase(str: string): boolean {
        if (!this.isString(str)) return false;
        return str.includes("_") && str !== "_" && !(/[A-Z]+/g).test(str);
    }

    public static camelCaseToSnakeCase(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        if (!this.isCamelCase(str)) return str;
        return str.replace(/[A-Z]+/g, (char, index) => `${index === 0 || index === str.length ? "" : "_"}${char.toLowerCase()}`);
    }

    public static snakeCaseToCamelCase(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        if ((/[A-Z]+/g).test(str) && !str.includes("_")) return str;
        return str.split(/_/g).map((words, i) => `${i === 0 ? words.charAt(0).toLowerCase() : words.charAt(0).toUpperCase()}${words.slice(1)}`).join("");
    }

    public static reverse(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        let result = "";
        const length = str.length - 1;
        for (let i = length; i > -1; i--) {
            result += str[i];
        }
        return result;
    }

    public static shuffle(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        const chars = str.split("");
        Mixed.shuffle(chars);
        return chars.join("");
    }

    public static slugify(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        return str.replace(/\s/g, "-");
    }

    public static first(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }

        return str.charAt(0);
    }

    public static last(str: string): string {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }
        return str.charAt(str.length - 1);
    }

    public static insert(str: string, toInsert: string, position: number) {
        if (!this.isString(str)) {
            throw new RaiseTypeError("string", str);
        }

        const { length } = str;
        if (position < 0 || position > length) {
            throw new RangeError(`The position is not between content lengths. min = 0, max = ${length}`);
        }
        let result = "";

        for (let i = 0; i < length; i++) {
            result += i === position ? `${toInsert}${str[i]}` : str[i];
        }

        return result;
    }
}
