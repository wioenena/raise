import { equal, assert } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { Raise } from "../mod.ts";

Deno.test("range(0,10)", () => {
    assert(
        equal(
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            Raise.range(0, 10)
        )
    );
});

Deno.test("range with for of", () => {
    let i = 0;
    for (const num of Raise.range(0, 20)) {
        assert(equal(i, num));
        i++;
    }
});

Deno.test("negative range", () => {
    assert(
        equal(
            [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            Raise.range(-5, 5)
        )
    );
});

Deno.test("isPromise with arrow function", () => {
    const asyncfn = async () => { };
    const nonAsyncFn = () => { };
    assert(
        equal(
            Raise.isPromise(asyncfn),
            true
        )
    );
    assert(
        equal(
            Raise.isPromise(nonAsyncFn),
            false
        )
    );

    assert(
        equal(
            Raise.isPromise(asyncfn()),
            true
        )
    );

    assert(
        equal(
            Raise.isPromise(nonAsyncFn()),
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
            Raise.isPromise(asyncfn),
            true
        )
    );
    assert(
        equal(
            Raise.isPromise(nonAsyncFn),
            false
        )
    );

    assert(
        equal(
            Raise.isPromise(asyncfn()),
            true
        )
    );

    assert(
        equal(
            Raise.isPromise(nonAsyncFn()),
            false
        )
    );
});

Deno.test("isPromise with Promise structure", () => {
    const promise = new Promise((r, j) => { });
    assert(
        equal(
            Raise.isPromise(promise),
            true
        )
    );
});

Deno.test("objectDifferenceKeys", () => {
    const base = { a: true, b: true };
    const target = { a: true, c: true };
    assert(
        equal(
            Raise.objectDifferenceKeys(base, target),
            ["b"]
        )
    );
});
