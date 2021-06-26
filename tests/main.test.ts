import { equal, assert } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { ArrayUtils, ObjectUtils, FunctionUtils, PromiseUtils, StringUtils } from "../mod.ts";
import { classMethodNameLength, classNameLength, classPropLength } from "../decorators.ts";

Deno.test("range(0,10)", () => {
    assert(
        equal(
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            ArrayUtils.range(0, 10)
        )
    );
});

Deno.test("range with for of", () => {
    let i = 0;
    for (const num of ArrayUtils.range(0, 20)) {
        assert(equal(i, num));
        i++;
    }
});

Deno.test("negative range", () => {
    assert(
        equal(
            [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            ArrayUtils.range(-5, 5)
        )
    );
});

Deno.test("isPromise with arrow function", () => {
    const asyncfn = async () => { };
    const nonAsyncFn = () => { };
    assert(
        equal(
            PromiseUtils.isPromise(asyncfn),
            true
        )
    );
    assert(
        equal(
            PromiseUtils.isPromise(nonAsyncFn),
            false
        )
    );

    assert(
        equal(
            PromiseUtils.isPromise(asyncfn()),
            true
        )
    );

    assert(
        equal(
            PromiseUtils.isPromise(nonAsyncFn()),
            false
        )
    );
});

Deno.test("isPromise without arrow function", () => {
    // eslint-disable-next-line no-empty-function
    async function asyncfn() { }
    function nonAsyncFn() { }
    assert(
        equal(
            PromiseUtils.isPromise(asyncfn),
            true
        )
    );
    assert(
        equal(
            PromiseUtils.isPromise(nonAsyncFn),
            false
        )
    );

    assert(
        equal(
            PromiseUtils.isPromise(asyncfn()),
            true
        )
    );

    assert(
        equal(
            PromiseUtils.isPromise(nonAsyncFn()),
            false
        )
    );
});

Deno.test("isPromise with Promise structure", () => {
    const promise = new Promise((..._) => { });
    assert(
        equal(
            PromiseUtils.isPromise(promise),
            true
        )
    );
});

Deno.test("objectDifferenceKeys", () => {
    const base = { a: true, b: true };
    const target = { a: true, c: true };
    assert(
        equal(
            ObjectUtils.objectDifferenceKeys(base, target),
            ["b"]
        )
    );
});

Deno.test("objectDifferenceKeys with classes", () => {
    class classBase {
        public a = true;
        public b = true;
        public hello() { }
        public get getA() { return this.a; }
        public set setA(_: boolean) { this.a = _; }
    }
    class classTarget {
        public a = true;
        public c = true;
    }

    const base = new classBase();
    const target = new classTarget();

    assert(
        equal(
            ObjectUtils.objectDifferenceKeys(base, target),
            ["b", "hello", "getA", "setA"]
        )
    );
});

Deno.test("class decorators", () => {
    @classNameLength(null, 10)
    class myClass {
        @classPropLength(null, 10)
        public myProp?: string;

        @classMethodNameLength(null, 10)
        public myMethod() { }
    }
});

Deno.test("Title", () => {
    assert(
        equal(
            StringUtils.title("Hello world!"),
            "Hello World!"
        )
    );
});
