/* eslint-disable no-underscore-dangle */
export class StringUtils {
    public static strLengthRange(str: string, min?: number | null, max?: number | null): boolean {
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
}
