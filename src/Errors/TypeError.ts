export class RaiseTypeError extends TypeError {
    public constructor(type: string, value: unknown) {
        super(`The ${value} is not of type '${type}'.`);
    }
}
