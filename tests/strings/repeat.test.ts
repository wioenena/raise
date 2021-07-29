import { repeat } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("repeat", () => {
    assertEquals(
        repeat("a", 5),
        "aaaaa"
    );

    assertEquals(
        repeat("a", 0),
        ""
    );

    assertEquals(
        repeat("a", 1),
        "a"
    );
});
