// eslint-disable-next-line arrow-body-style

/**
 * Apply decorators for functions.
 * @param base - Base function.
 * @param decorator - Decorator function.
 * @returns {unknown}
 */
export const applyDecorator = (base: Function, decorator: Function) => function wrapper<AType = unknown, RType = unknown>(...args: AType[]): RType {
        return decorator(base, ...args);
    };
