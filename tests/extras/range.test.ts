import { equal, assert } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { range } from "../../extras.ts";

Deno.test("range(0,10)", () => {
    assert(
        equal(
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            range(0, 10)
        )
    );
});

Deno.test("range with for of", () => {
    let i = 0;
    for (const num of range(0, 20)) {
        assert(equal(i, num));
        i++;
    }
});

Deno.test("negative range", () => {
    assert(
        equal(
            [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            range(-5, 5)
        )
    );
});
