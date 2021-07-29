import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { repeat } = Strings;

Deno.test("repeat", () => {
    assertEquals(
        repeat("abc", 5),
        "abc".repeat(5)
    );

    assertEquals(
        repeat("abc", 0),
        "abc".repeat(0)
    );

    assertEquals(
        repeat("abc", 1),
        "abc".repeat(1)
    );
});
