import { trim } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("trim", () => {
    assertEquals(
        trim("a b c"),
        "a b c"
    );

    assertEquals(
        trim("   a b c   "),
        "a b c"
    );

    assertEquals(
        trim("   a   b   c   "),
        "a b c"
    );
});
