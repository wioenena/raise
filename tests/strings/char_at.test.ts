import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { charAt } = Strings;

Deno.test("charAt", () => {
    assertEquals(
        charAt("abcdefg", 4),
        "e"
    );

    assertEquals(
        charAt("abc", 3),
        undefined
    );
});
