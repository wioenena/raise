import { equal, assert } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { ObjectUtils } from "../mod.ts";

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
