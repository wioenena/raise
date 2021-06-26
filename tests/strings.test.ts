import { equal, assert } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { StringUtils } from "../mod.ts";

Deno.test("Title", () => {
    assert(
        equal(
            StringUtils.title("Hello world!"),
            "Hello World!"
        )
    );

    assert(
        equal(
            StringUtils.title(StringUtils as any),
            null
        )
    );
});

Deno.test("isString", () => {
    assert(
        equal(
            StringUtils.isString("Hi"),
            true
        )
    );

    assert(
        equal(
            StringUtils.isString(3),
            false
        )
    );

    assert(
        equal(
            // eslint-disable-next-line no-new-wrappers
            StringUtils.isString(new String("hi")),
            true
        )
    );
});

Deno.test("isFullString", () => {
    assert(
        equal(
            StringUtils.isFullString(null as any),
            false
        )
    );

    assert(
        equal(
            StringUtils.isFullString(""),
            false
        )
    );
    assert(
        equal(
            StringUtils.isFullString(" "),
            false
        )
    );

    assert(
        equal(
            StringUtils.isFullString("Hello"),
            true
        )
    );
});
