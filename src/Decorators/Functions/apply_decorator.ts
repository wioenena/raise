// eslint-disable-next-line arrow-body-style
export const applyDecorator = (base: Function, decorator: Function) => {
    return function wrapper<AType = unknown, RType = unknown>(...args: AType[]): RType {
        return decorator(base, ...args);
    };
};
