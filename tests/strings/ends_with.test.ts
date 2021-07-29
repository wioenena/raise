import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { endsWith } = Strings;

Deno.test("endsWith", () => {
    assertEquals(
        endsWith("abcde", "e"),
        "abcde".endsWith("e")
    );

    assertEquals(
        endsWith("abcde", "c", 3),
        "abcde".endsWith("c", 3),
    );
});
