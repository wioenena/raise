import { StringUtils } from "../../String/StringUtils.ts";

export function classNameLength(min?: number | null, max?: number | null) {
    return function (target: NewableFunction) {
        if (!StringUtils.strLengthRange(target.name, min, max)) {
            throw new RangeError(`Class name is not within the specified ranges. (class name = ${target.name}, length = ${target.name.length}, min = ${min ?? -1} max = ${max ?? Infinity})`);
        }
    };
}

export function classPropLength(min?: number | null, max?: number | null) {
    return function (target: Object, property: string | symbol) {
        let strProperty: string = property as string;

        if (typeof property === "symbol") {
            if (typeof property.description === "undefined") {
                throw new TypeError(`Symbol is empty. (Symbol ${property.toString()})`);
            }
            strProperty = property.description;
        }

        if (!StringUtils.strLengthRange(strProperty, min, max)) {
            throw new RangeError(`Class property name is not within the specified ranges. (class name = ${target.constructor.name}, property =${strProperty}, length = ${strProperty.length}, min = ${min ?? -1}, max = ${max ?? Infinity})`);
        }
    };
}

export function classMethodNameLength(min?: number | null, max?: number | null) {
    return function (target: Object, _: string | symbol, descriptor: PropertyDescriptor) {
        const method = descriptor.value as Function;
        if (!StringUtils.strLengthRange(method.name, min, max)) {
            throw new RangeError(`Class method name is not within the specified ranges. (class name = ${target.constructor.name}, method name = ${method.name}, length = ${method.name.length}, min = ${min ?? -1}, max = ${max ?? Infinity})`);
        }
    };
}
