import { equal, assert } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { PromiseUtils } from "../mod.ts";

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
