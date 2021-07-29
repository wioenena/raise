import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { append } = Strings;

Deno.test("append", () => {
    assertEquals(
        append("abc", "d", 4),
        "abcd"
    );

    assertEquals(
        append("abc", "d", 0),
        "dabc"
    );
});
