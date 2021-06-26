import { classMethodNameLength, classNameLength, classPropLength } from "../decorators.ts";

Deno.test("class decorators", () => {
    @classNameLength(null, 10)
    class myClass {
        @classPropLength(null, 10)
        public myProp?: string;

        @classMethodNameLength(null, 10)
        public myMethod() { }
    }
});
