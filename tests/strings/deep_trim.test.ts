import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { deepTrim } = Strings;

Deno.test("trim", () => {
    assertEquals(
        deepTrim("a b c"),
        "a b c"
    );

    assertEquals(
        deepTrim("   a b c   "),
        "a b c"
    );

    assertEquals(
        deepTrim("   a   b   c   "),
        "a b c"
    );
});
